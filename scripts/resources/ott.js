let request = require('request');
let fs = require('fs');

//const URL = "https://raw.githubusercontent.com/kaltura/DeveloperPortalDocs/API-conversion/documentation/Kaltura-API-Documentation-Set./Kaltura-OTT-Backend-API-Overview.md";
const URL = "https://raw.githubusercontent.com/kaltura/DeveloperPortalDocs/master/documentation/Kaltura-OTT-Backend-API-Overview.md"

request.get(URL, (err, resp, body) => {
  if (err) throw err;
  if (resp.statusCode >= 300) throw resp.statusCode;
  let lines = body.split('\n');
  lines = lines.slice(4);
  lines = lines.map(line => {
    return line
      .replace(/\{% highlight (\w*) %\}/, '```$1')
      .replace(/\{% endhighlight %\}/, '```');
  })
  fs.writeFileSync(__dirname + '/../../markdown/generated/ott.md', lines.join('\n'));
})
