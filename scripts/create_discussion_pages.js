let lucybot = require('lucybot');
let config = require('../LucyBot');
let async = require('async');

const PARALLEL_LIMIT = 500;

let createDiscussionPages = function(items, callback) {
  async.series(items.map(item => {
    let slug = item.title.replace(/\W+/g, '_');
    return asyncCallback => {
      // TODO: remove setTimeout(), use disqus API to create page at forum.kaltura.com/t/{{slug}}
      setTimeout(() => {
        console.log(slug);
        if (!item.children) asyncCallback();
        else createDiscussionPages(item.children, asyncCallback);
      });
    }
  }), callback);
}

let nav = lucybot.initializeNavigation(config.operationNavigation, config, require('../openapi'));
createDiscussionPages(nav, err => {
  if (err) throw err;
  console.log('done');
})
