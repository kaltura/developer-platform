var fs = require('fs');

var CLIENT_LANGS = ['php53', '', 'php5Zend', 'java', 'csharp', 'ruby', 'python', 'node', 'js', 'cli', 'objc', 'android'];

var clientMD = '';
/*
var genDate = fs.readFileSync(__dirname + '/../node_modules/kaltura-schema/api_schema.xml', 'utf8').match(/generatedDate="(\d+)"/)[1];
genDate = new Date(parseInt(genDate) * 1000);
var year = (genDate.getYear() + 1900).toString();
var month = (genDate.getMonth() + 1).toString();
if (month.length === 1) month = '0' + month;
var day = genDate.getDate();
if (day.length === 1) day = '0' + day;
genDate = day + '-' + month + '-' + year;
*/
var genDate = '19-01-2017';
CLIENT_LANGS.forEach(function(cl, idx) {
  if (!cl) return;
  var link = 'http://cdnbakmi.kaltura.com/content/clientlibs/' + cl + '_' + genDate + '.tar.gz';
  if (cl === 'node') cl = 'nodejs';
  let offset = idx * -71;
  clientMD += `<a class="client-lib-link ${cl}" data-language="${cl}" href="${link}" style="background-position: ${offset}px"></a>`;
});

var markdown = fs.readFileSync(__dirname + '/../markdown/templates/client_libraries.md', 'utf8');
markdown = markdown.replace('{{ client_libraries }}', clientMD);
fs.writeFileSync(__dirname + '/../markdown/generated/client_libraries.md', markdown);
