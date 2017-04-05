const YAML = require('js-yaml');
const fs = require('fs');

const TARGET_API = process.env.TARGET_API || 'vpaas';

const getYAML = function(name) {
  return YAML.load(fs.readFileSync(__dirname + '/' + name + '.yml', 'utf8'));
}

const openapi = require('./' + TARGET_API + '.openapi.json');
const config = module.exports = getYAML('base.LucyBot');
const apiConfig = getYAML(TARGET_API + '.LucyBot');
const nav = getYAML('navigation');
Object.assign(config, apiConfig);

config.operationNavigation = config.operationNavigation.concat(nav.navigation);

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
  let usedTags = [];
  function addTags(item) {
    if (item.tag) usedTags.push(item.tag);
    if (item.children) item.children.forEach(addTags);
  }
  config.operationNavigation.forEach(addTags);
  let unusedTags = openapi.tags.filter(t => {
    return usedTags.indexOf(t.name) === -1;
  });
  if (unusedTags.length) {
    config.operationNavigation.splice(2, 0, {
      title: 'OTT Operations',
      children: unusedTags.map(t => ({tag: t.name})),
    })
  }
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
  markdown: "# Error Codes\n\n" + openapi['x-errors'].map(e => {
    let str = '* `' + e.name + '`';
    if (e.message) str += ' - ' + e.message;
  }).join('\n'),
});

