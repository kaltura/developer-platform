var fs = require('fs');
var ejs = require('ejs');

const MARKDOWN_DIR = __dirname + '/../../markdown';

const target = process.argv[2];
const version = process.argv[3].replace('v', '').replace('_', '.');
const dir = process.argv[4];
const baseUrl = process.argv[5];

console.log(`target: ${target}, version: ${version}, dir: ${dir}, baseUrl: ${baseUrl}`);

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var d = new Date();
var date = pad(d.getDate(), 2) + '-' + pad(d.getMonth() + 1, 2) + '-' + d.getFullYear();
var regex = new RegExp(`^([^_]+)_${date}\.tar\.gz$`);
var files = fs.readdirSync(dir);

var clientMD = '';
var offsets = {
	php5: 0,
	php53: -71,
	php5Zend: -142,
	java: -213,
	csharp: -284,
	ruby: -355,
	python: -426,
	node: -497,
	ajax: -568,
	cli: -639,
	objc: -710,
	android: -781,
	swift: -852,
	php4: -923
};

files.forEach((file) => {
	var matches = regex.exec(file);
	if(matches) {
		var link = baseUrl + file;
		var language = matches[1];
		var offset = offsets[language];
		clientMD += `<a class="client-lib-link ${language}" data-language="${language}" href="${link}" style="background-position: ${offset}px"></a>`;
	}
});

var markdownTmpl = fs.readFileSync(MARKDOWN_DIR + '/templates/client_libraries.md', 'utf8');
ejs.renderFile(MARKDOWN_DIR + '/templates/client_libraries.md', {
  clientMD: clientMD,
  target: target,
  version: version,
}, {}, (err, md) => {
  fs.writeFileSync(MARKDOWN_DIR + '/generated/client_libraries.md', md);
})
