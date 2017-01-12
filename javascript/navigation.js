(function() {
  var menuItems = window.lucybot.openapi['x-navigation'];
  var definitions = window.lucybot.openapi.definitions;
  var enums = window.lucybot.openapi['x-enums'];
  var item = menuItems.filter(function(i) {return i.title === "General Objects"})[0];
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
  item.children = [];
  item.children.push({
    title: "Objects",
    children: Object.keys(definitions).filter(function(d) {
      return d.indexOf("Filter") === -1;
    }).map(makeItem),
  });
  item.children.push({
    title: "Enums",
    children: Object.keys(enums).map(makeEnumItem),
  })
  item.children.push({
    title: "Filters",
    children: Object.keys(definitions).filter(function(d) {
      return d.indexOf("Filter") !== -1;
    }).map(makeItem),
  });
})();
