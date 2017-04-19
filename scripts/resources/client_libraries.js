var fs = require('fs');
var ejs = require('ejs');

var CLIENT_LANGS = ['php5', 'php53', 'php5Zend', 'java', 'csharp', 'ruby', 'python', 'node', 'ajax', 'cli', 'objc', 'android'];

var clientMD = '';

const LINKS = {
  ott: {
    genDate: '26-02-2017',
    version: '4.1',
    baseURL: 'https://tvpapi-us-preprod.ott.kaltura.com/v4_1/clientlibs/',
  },
  ovp: {
    genDate: '22-03-2017',
    version: '3.3.0',
    baseURL: 'http://cdnbakmi.kaltura.com/content/clientlibs/',
  }
}

const MARKDOWN_DIR = __dirname + '/../../markdown';
const TARGET = process.env.TARGET_API || 'ovp';
const LINK = LINKS[TARGET];

CLIENT_LANGS.forEach(function(cl, idx) {
  if (!cl) return;
  var link = LINK.baseURL + cl + '_' + LINK.genDate + '.tar.gz';
  if (cl === 'node') cl = 'nodejs';
  let offset = idx * -71;
  clientMD += `<a class="client-lib-link ${cl}" data-language="${cl}" href="${link}" style="background-position: ${offset}px"></a>`;
});

var markdownTmpl = fs.readFileSync(MARKDOWN_DIR + '/templates/client_libraries.md', 'utf8');
ejs.renderFile(MARKDOWN_DIR + '/templates/client_libraries.md', {
  clientMD: clientMD,
  target: TARGET,
  version: LINK.version,
}, {}, (err, md) => {
  fs.writeFileSync(MARKDOWN_DIR + '/generated/client_libraries.md', md);
})
