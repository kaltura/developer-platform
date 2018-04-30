global.window = {
  ejs: require('ejs'),
}

var CodeTemplate = require('../codegen');
var swagger = require('../ovp.openapi.json');
var fs = require('fs');
const templateDir = __dirname + '/../codegen/templates/';
const OUT_DIR = __dirname + '/../homepage/assets/code/';

CodeTemplate.LANGUAGES.forEach(function(language) {
  let opts = {language, swagger};
  let ext = CodeTemplate.LANGUAGE_DETAILS[language].ext;
  let templateFile = templateDir + '/' + language + '.ejs.' + ext;
  let setupFile = templateDir + '/' + language + '_setup' + '.ejs.' + ext;
  opts.template = fs.readFileSync(templateFile, 'utf8').trim();
  if (fs.existsSync(setupFile)) opts.setupTemplate = fs.readFileSync(setupFile, 'utf8').trim();
  var tmpl = new CodeTemplate(opts);

  let options = {
    name: 'simple',
    service: 'media',
    action: 'list',
    input: {
      answers: {},
      showSetup: false,
    },
  }

  options.input.answers = options.input.answers || {};
  options.input.showSetup = options.input.showSetup || false;
  options.input.path = '/service/' + options.service + '/action/' + options.action;
  options.input.method = 'post';
  options.input.service = options.service;
  options.input.action = options.action;
  var code = tmpl.render(JSON.parse(JSON.stringify(options.input)));
  code = code.trim()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  var filename = OUT_DIR + '/' + language + '.html';
  fs.writeFileSync(filename, code);
});

