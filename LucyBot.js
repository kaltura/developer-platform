const YAML = require('js-yaml');
const fs = require('fs');

const TARGET_API = process.env.TARGET_API || 'ovp';

const getYAML = function(name) {
  return YAML.load(fs.readFileSync(__dirname + '/' + name + '.yml', 'utf8'));
}

const openapi = require('./' + TARGET_API + '.openapi.json');
const config = module.exports = getYAML('base.LucyBot');
const apiConfig = getYAML(TARGET_API + '.LucyBot');
Object.assign(config, apiConfig);
config.env = {
  target_api: TARGET_API,
}

var definitions = openapi.definitions;
var enums = openapi['x-enums'];

function makeItem(def) {
  return {definition: def};
}

function makeEnumItem(name) {
  var enm = enums[name];
  var table = '| Name | Value |\n'
            + '|------|-------|\n';
  return {
    title: name,
    contents: table + enm.oneOf.map(function(s) {
      return "| " + s.title + " | " + JSON.stringify(s.enum[0]) + " |";
    }).join('\n'),
  }
}

if (TARGET_API === 'ott') {
  let tagItems = openapi.tags.map(t => ({tag: t.name}));
  config.operationNavigation.push({children: tagItems, title: 'Services'});
} else {
  config.javascript = [
    'assets/mixpanel.js',
    'assets/tracker.js',
  ].concat(config.javascript);
}

if (process.env.DISABLE_SWIFTYPE === 'true') {
  config.javascript = config.javascript.filter(j => !j.endsWith('/search.js'));
  console.log("FILTER", config.javascript);
}

let objectsItem = {title: 'General Objects', children: [], prerender: false};
config.operationNavigation.push(objectsItem);
objectsItem.children.push({
  title: "Objects",
  children: Object.keys(definitions).filter(function(d) {
    return d.indexOf("Filter") === -1;
  }).map(makeItem),
});
objectsItem.children.push({
  title: "Enums",
  children: Object.keys(enums).map(makeEnumItem),
})
objectsItem.children.push({
  title: "Filters",
  children: Object.keys(definitions).filter(function(d) {
    return d.indexOf("Filter") !== -1;
  }).map(makeItem),
});

config.operationNavigation.push({
  title: "Error Codes",
  prerender: false,
  markdown: "# Error Codes\n\n" + openapi['x-errors'].map(e => {
    let str = '* `' + e.name + '`';
    if (e.code && e.code !== e.name) str += ' (code: ' + e.code + ')';
    let desc = e.message || e.description;
    if (desc) str += ' - ' + desc;
    return str;
  }).join('\n'),
});

function containsItem(tagOrOp, items) {
  items = items || config.operationNavigation;
  let matching = items.filter(item => {
    if (item.tag === tagOrOp || item.operation === tagOrOp) return true;
    return containsItem(tagOrOp, item.children || []);
  });
  return !!matching.length;
}

let miscItem = config.operationNavigation.filter(i => i.isMiscellaneous).pop();
if (miscItem) {
  miscItem.isMiscellaneous = false;
  miscItem.children = [];
  openapi.tags.forEach(tag => {
    if (!containsItem(tag.name)) {
      miscItem.children.push({tag: tag.name});
    }
  });
  for (let path in openapi.paths) {
    for (let method in openapi.paths[path]) {
      let op = openapi.paths[path][method];
      if (!containsItem(op.operationId) && !containsItem(op.tags[0])) {
        miscItem.children.push({operation: op.operationId});
      }
    }
  }
}

require('./v4-navigation')(config);
