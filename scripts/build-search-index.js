let Swiftype = require('swiftype');
let swiftype = new Swiftype({apiKey: process.env.SWIFTYPE_KEY});
let openapi = require('../ovp.openapi.json');
let lucybot = require('../LucyBot.js');
let async = require('async');
let fs = require('fs');
let npath = require('path');

const PARALLEL_LIMIT = 5;
const ENGINE = 'ovp-developer-platform';

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
  objects.push({
    engine: ENGINE,
    documentType: 'object',
    document: {
      external_id: defName,
      fields: [
        {name: 'name', value: defName, type: 'string'},
      ]
    }
  })
}

const documents = [];
function addNavItem(item, path='') {
  path = path + '/' + (item.title || '').replace(/\W+/g, '_');
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

let allDocs = operations.concat(objects).concat(documents);

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
