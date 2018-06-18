const openapi = require('./ovp.openapi.json');
const fs = require('fs');

function getOperations(tag) {
  let ops = [];
  for (let path in openapi.paths) {
    for (let method in openapi.paths[path]) {
      let op = openapi.paths[path][method];
      if (op.tags.indexOf(tag) !== -1) ops.push(op.operationId);
    }
  }
  return ops;
}

module.exports = function(config) {
  let redirects = [];
  function addRedirect(from, to) {
    redirects.push({from: '/api-docs' + from, to: '/api-docs' + to});
    redirects.push({from: '/console' + from, to: '/console' + to});
  }
  function setPathForItem(item, oldPath='') {
    let nextPath = oldPath;
    if (item.tag) {
      nextPath += '/' + item.tag;
      item.path = '/service/' + item.tag;
      addRedirect(nextPath, item.path);
      if (!item.children) {
        item.children = getOperations(item.tag).map(op => {
          return {operation: op}
        })
      }
    } else if (item.operation) {
      nextPath += '/' + item.operation.replace(/\W+/g, '_');
      let [service, action] = item.operation.split('.');
      item.path = '/service/' + service + '/action/' + action;
      addRedirect(nextPath, item.path);
    } else {
      nextPath += item.path || '/' + (item.title || '').replace(/\W+/g, '_');
    }
    (item.children || []).forEach(child => setPathForItem(child, nextPath));
  }

  config.operationNavigation.forEach(item => {
    setPathForItem(item);
  });
  config.routes['/console'].navigation = openapi.tags.map(tag => {
    let item = {tag: tag.name, path: '/service/' + tag.name};
    item.children = [];
    for (let path in openapi.paths) {
      for (let method in openapi.paths[path]) {
        let op = openapi.paths[path][method];
        if (op.tags.indexOf(tag.name) !== -1) {
          item.children.push({
            operation: op.operationId,
            path: '/service/' + tag.name + '/action/' + op.operationId.split('.')[1],
          })
        }
      }
    }
    return item;
  })
  if (process.env.WRITE_REDIRECTS) fs.writeFileSync(__dirname + '/v4-redirects.json', JSON.stringify(redirects, null, 2));
}
