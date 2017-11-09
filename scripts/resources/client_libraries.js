var fs = require('fs');
var ejs = require('ejs');


var clientMD = '';

const LINKS = {
  ott: {
    genDate: '26-02-2017',
    version: '4.1',
    baseURL: 'https://tvpapi-us-preprod.ott.kaltura.com/v4_1/clientlibs/',
  },
  ovp: {
    genDate: '02-10-2017',
    version: '3.3.0',
    baseURL: 'http://cdnbakmi.kaltura.com/content/clientlibs/',
  }
}

const MARKDOWN_DIR = __dirname + '/../../markdown';
const TARGET = process.env.TARGET_API || 'ovp';
const LINK = LINKS[TARGET];
const CLIENT_LANGS = {
  php5: LINK.genDate,
  php53: LINK.genDate,
  php5Zend: LINK.genDate,
  java: '22-03-2017',
  csharp: LINK.genDate,
  ruby: LINK.genDate,
  python: LINK.genDate,
  node: '22-03-2017',
  ajax: '22-03-2017',
  cli: LINK.genDate,
  objc: LINK.genDate,
  android: LINK.genDate,
};

var idx=0;
for (var cl in CLIENT_LANGS){
        if (CLIENT_LANGS.hasOwnProperty(cl)) {
	    var link = LINK.baseURL + cl + '_' + CLIENT_LANGS[cl] + '.tar.gz';
	    if (cl === 'node') cl = 'nodejs';
	    let offset = idx * -71;
	    clientMD += `<a class="client-lib-link ${cl}" data-language="${cl}" href="${link}" style="background-position: ${offset}px"></a>`;
	    idx++;
	}
}

var markdownTmpl = fs.readFileSync(MARKDOWN_DIR + '/templates/client_libraries.md', 'utf8');
ejs.renderFile(MARKDOWN_DIR + '/templates/client_libraries.md', {
  clientMD: clientMD,
  target: TARGET,
  version: LINK.version,
}, {}, (err, md) => {
  fs.writeFileSync(MARKDOWN_DIR + '/generated/client_libraries.md', md);
})
