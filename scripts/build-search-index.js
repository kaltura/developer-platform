let Swiftype = require('swiftype');
let swiftype = new Swiftype({apiKey: process.env.SWIFTYPE_KEY});
let openapi = require('../ovp.openapi.json');
let lucybot = require('../LucyBot.js');
let async = require('async');
let fs = require('fs');
let npath = require('path');

const PARALLEL_LIMIT = 5;
const ENGINE = 'ovp-developer-platform';

function getLinkFromTitle(title) {
  return title.replace(/\W+/g, '_');
}

const operations = [];
for (let path in openapi.paths) {
  for (let method in openapi.paths[path]) {
    let op = openapi.paths[path][method];
    let [service, action] = op.operationId.split('.');
    operations.push({
      engine: ENGINE,
      documentType: 'operation',
      document: {
        external_id: op.operationId,
        fields: [
          {name: 'operationId', value: op.operationId, type: 'string'},
          {name: 'action', value: action, type: 'string'},
          {name: 'service', value: service, type: 'string'},
          {name: 'description', value: op.description || '', type: 'string'},
        ]
      }
    });
  }
}

const objects = [];
for (let defName in openapi.definitions) {
  let def = openapi.definitions[defName];
  let type = defName.endsWith("Filter") ? "filter" : "object";
  objects.push({
    engine: ENGINE,
    documentType: 'object',
    document: {
      external_id: defName,
      fields: [
        {name: 'name', value: defName, type: 'string'},
        {name: 'type', value: type, type: 'string'},
        {name: 'description', value: def.description || '', type: 'string'},
      ]
    }
  })
}

for (let defName in openapi['x-enums']) {
  let def = openapi['x-enums'][defName];
  objects.push({
    engine: ENGINE,
    documentType: 'object',
    document: {
      external_id: defName,
      fields: [
        {name: 'name', value: defName, type: 'string'},
        {name: 'type', value: 'enum', type: 'string'},
        {name: 'description', value: def.description || '', type: 'string'},
      ]
    }
  })
}

const documents = [];
function addNavItem(item, path='') {
  path = path + '/' + getLinkFromTitle(item.title || '');
  if (item.makdown || item.markdownURL || item.markdownFile) {
    let md = item.markdown || fs.readFileSync(npath.join(__dirname, '..', item.markdownURL || item.markdownFile), 'utf8');
    documents.push({
      engine: ENGINE,
      documentType: 'document',
      document: {
        external_id: item.path || path,
        fields: [
          {name: 'path', value: item.path || path, type: 'string'},
          {name: 'title', value: item.title, type: 'string'},
          {name: 'body', value: md, type: 'text'},
        ]
      }
    })
  }
  if (item.children) {
    item.children.forEach(child => {
      addNavItem(child, path);
    })
  }
}

lucybot.operationNavigation.forEach(item => addNavItem(item));

function getWorkflowLink(name, title) {
  let link = "";
  lucybot.workflowNavigation.forEach(nav => {
    if (nav.workflow === name) {
      link = '/' + getLinkFromTitle(nav.title);
    } else {
      let child = (nav.children || []).filter(c => c.workflow === name).pop();
      if (child) link = '/' + getLinkFromTitle(nav.title) + '/' + getLinkFromTitle(title);
    }
  })
  return link;
}

const workflows = [];
const WORKFLOW_DIR = __dirname + '/../workflows';
fs.readdirSync(WORKFLOW_DIR).forEach(name => {
  let readme = fs.readFileSync(WORKFLOW_DIR + '/' + name + '/readme.md', 'utf8');
  let title = readme.match(/^# (.*)/m)[1];
  let link = getWorkflowLink(name, title);
  if (!link) {
    console.error("No link found for workflow " + name);
    return
  }
  workflows.push({
    engine: ENGINE,
    documentType: 'workflows',
    document: {
      external_id: name,
      fields: [
        {name: 'title', value: title, type: 'string'},
        {name: 'link', value: link, type: 'string'},
        {name: 'body', value: readme, type: 'text'},
      ]
    }
  })
})

let allDocs = workflows.concat(operations).concat(objects).concat(documents);

async.parallelLimit(allDocs.map(doc => {
  return acb => {
    console.log(doc.documentType, doc.document.external_id);
    swiftype.documents.create(doc, acb);
  }
}), PARALLEL_LIMIT, err => {
  if (err) {
    console.error(err);
    throw err;
  }
});
