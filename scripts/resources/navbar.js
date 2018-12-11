var fs = require('fs');
var ejs = require('ejs');
const MARKDOWN_DIR = __dirname + '/../../templates';
const TARGET = process.env.TARGET_API || 'ovp';
const OTT_VERSION = process.env.OTT_API_VERSION || 'v5_1_0';
console.log(TARGET);

ejs.renderFile(MARKDOWN_DIR + '/navbar.ejs', {
  target: TARGET,
  ottVersion: OTT_VERSION.replace(/_/g, '.')
}, {}, (err, md) => {
  fs.writeFileSync(MARKDOWN_DIR + '/navbar.html', md);
})
