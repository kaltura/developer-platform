var request = require('request');
var fs = require('fs');

var versionURL = 'https://api.github.com/repos/kaltura/server';
var headers = {'User-Agent': 'kaltura-api-recipes'};

var ERROR_MARKDOWN_PREFIX = "# Error Codes\n\n";

request.get(versionURL, {json: true, headers}, function(err, resp, body) {
  if (err) throw err;
  var version = body.default_branch;
  var url = 'https://raw.githubusercontent.com/kaltura/server/' + version + '/api_v3/lib/KalturaErrors.php';
  request.get(url, function(err, resp, body) {
    if (err) throw err;
    var lines = body.split('\n');
    var errors = [];
    lines.forEach(function(line) {
      var matches = line.match(/const (\w+) = ".*;([^;]+)";/)
      if (!matches) return;
      errors.push({
        name: matches[1],
        description: matches[2],
      })
    })
    errors = ERROR_MARKDOWN_PREFIX + errors.map(function(error) {
      return '* `' + error.name + '` - ' + error.description;
    }).join('\n');
    fs.writeFileSync(__dirname + '/../markdown/generated/errors.md', errors);
  })
})
