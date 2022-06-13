var fs = require('fs');
var ejs = require('ejs');
var version = 'v18.7.0';
const MARKDOWN_DIR = __dirname + '/../../markdown';
const TARGET = process.env.TARGET_API || 'ovp';
const CLIENT_LANGS = {
  'PHP': 'php5',
  'PHP53': 'php53',
  'ZF': 'php5Zend',
  'Java': 'java',
  'Csharp': 'csharp',
  'Ruby': 'ruby',
  'Python': 'python',
  'NodeJS': 'nodejs',
  'AJAX': 'ajax',
  'CLI': 'cli',
  'Android': 'android',
  'Swift': 'swift',
  'Angular': 'angular',
  'Typescript': 'typescript',
};
console.log(TARGET);
if (TARGET === 'ott'){	
	if(process.env.OTT_API_VERSION) {
		version = process.env.OTT_API_VERSION;
	}
	baserepo_url='https://github.com/kaltura/KalturaOttGeneratedAPIClients';
}else{
	if(process.env.OVP_API_VERSION) {
		version = process.env.OVP_API_VERSION;
	}
	baserepo_url='https://github.com/kaltura/KalturaGeneratedAPIClients';
}
var clientMD = '';
var idx=0;
for (var cl in CLIENT_LANGS){
	var link = baserepo_url + cl+'/archive/'+ version+'.tar.gz'
	    let offset = idx * -71;
	    clientMD += `<a class="client-lib-link ${CLIENT_LANGS[cl]}" data-language="${CLIENT_LANGS[cl]}" href="${link}" style="background-position: ${offset}px"></a>`;
	    idx++;
}
var markdownTmpl = fs.readFileSync(MARKDOWN_DIR + '/templates/client_libraries.md', 'utf8');
ejs.renderFile(MARKDOWN_DIR + '/templates/client_libraries.md', {
  clientMD: clientMD,
  target: TARGET,
  version: version,
}, {}, (err, md) => {
  fs.writeFileSync(MARKDOWN_DIR + '/generated/client_libraries.md', md);
})
