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
    'assets/google-analytics.js',
    'assets/tracker.js',
  ].concat(config.javascript);
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
    let desc = e.message
    if (e.message) str += ' - ' + e.message;
    return str;
  }).join('\n'),
});

if (TARGET_API === 'ovp') {
  require('./v4-navigation')(config);
}
