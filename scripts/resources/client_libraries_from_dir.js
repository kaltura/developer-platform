var fs = require('fs');
var ejs = require('ejs');

const MARKDOWN_DIR = __dirname + '/../../markdown';

const target = process.argv[2];
const version = process.argv[3].replace('v', '').replace('_', '.');
const dir = process.argv[4];
const baseUrl = process.argv[5];

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
var offset = 0;

files.forEach((file) => {
	var matches = regex.exec(file);
	if(matches) {
		var link = baseUrl + file;
		var language = matches[1];
		clientMD += `<a class="client-lib-link ${language}" data-language="${language}" href="${link}" style="background-position: ${offset}px"></a>`;
		offset -= 71;
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
