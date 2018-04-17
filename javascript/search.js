var URL = 'http://api.swiftype.com/api/v1/public/engines/search?engine_key=nDV8CSbwfyrqCNQgpt79&';

window.lucybot.search = function(query, page, callback) {
  var url = URL + 'q=' + encodeURIComponent(query);
  window.jquery.getJSON(url, function(data) {
    var results = [];
    (data.records.operation || []).forEach(function(op) {
      results.push({ref: '/service/' + op.service + '/action/' + op.action, score: op._score});
    });
    (data.records.object || []).forEach(function(def) {
      var sub = 'Objects';
      if (def.name.indexOf('Filter') !== -1) {
        sub = 'Filters';
      } else if (def.name.indexOf('Enum') !== -1) {
        sub = 'Enums';
      }
      results.push({ref: '/General_Objects/' + sub + '/' + def.name, score: def._score});
    });
    (data.records.document || []).forEach(function(doc) {
      results.push({ref: doc.path, score: doc._score});
    });
    results.sort((r1, r2) => r1.score > r2.score ? -1 : 1);
    callback(null, results);
  });
}
