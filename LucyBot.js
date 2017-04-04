const YAML = require('js-yaml');
const fs = require('fs');

const TARGET_API = process.env.TARGET_API || 'vpaas';

const openapi = require('./' + TARGET_API + '.openapi.json');
const config = module.exports = YAML.load(fs.readFileSync(__dirname + '/base.LucyBot.yml', 'utf8'));
const apiConfig = YAML.load(fs.readFileSync(__dirname + '/' + TARGET_API + '.LucyBot.yml', 'utf8'));
Object.assign(config, apiConfig);

config.operationNavigation.push({
  title: "Error Codes",
  markdown: "# Error Codes\n\n" + openapi['x-errors'].map(e => {
    let str = '* `' + e.name + '`';
    if (e.message) str += ' - ' + e.message;
  }).join('\n'),
});

let objectsItem = config.operationNavigation.filter(i => i.title === 'General Objects')[0];
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

objectsItem.children = [];
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

