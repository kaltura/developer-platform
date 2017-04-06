var fs = require('fs');

var CLIENT_LANGS = ['php5', 'php53', 'php5Zend', 'java', 'csharp', 'ruby', 'python', 'node', 'ajax', 'cli', 'objc', 'android'];

var clientMD = '';

const LINKS = {
  ott: {
    genDate: '26-02-2017',
    baseURL: 'https://tvpapi-us-preprod.ott.kaltura.com/v4_1/clientlibs/',
  },
  ovp: {
    genDate: '22-03-2017',
    baseURL: 'https://tvpapi-us-preprod.ott.kaltura.com/v4_1/clientlibs/',
  }
}

const MARKDOWN_DIR = __dirname + '/../../markdown';
const LINK = process.env.TARGET_API === 'ott' ? LINKS.ott : LINKS.ovp;

CLIENT_LANGS.forEach(function(cl, idx) {
  if (!cl) return;
  var link = LINK.baseURL + cl + '_' + LINK.genDate + '.tar.gz';
  if (cl === 'node') cl = 'nodejs';
  let offset = idx * -71;
  clientMD += `<a class="client-lib-link ${cl}" data-language="${cl}" href="${link}" style="background-position: ${offset}px"></a>`;
});

var markdown = fs.readFileSync(MARKDOWN_DIR + '/templates/client_libraries.md', 'utf8');
markdown = markdown.replace('{{ client_libraries }}', clientMD);
fs.writeFileSync(MARKDOWN_DIR + '/generated/client_libraries.md', markdown);
