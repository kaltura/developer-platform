"use strict";

var fs = require('fs');
var expect = require('chai').expect;

global.window = {
  ejs: require('ejs'),
}

var swagger = require('../ott.openapi.json');
var CodeTemplate = require('../codegen');

describe('Sample Code', function() {
  this.timeout(5000);

  var testCases = [{
    name: 'simple',
    service: 'apptoken',
    action: 'get',
    input: {
      answers: {id: 'abc'},
      showSetup: false,
    },
  }, {
    name: 'add_channel',
    service: 'channel',
    action: 'add',
    input: {
      answers: {
        channel: {
          description: 'foo',
          isActive: true,
        }
      },
    }
  }, {
    name: 'two_parameters',
    service: 'assethistory',
    action: 'list',
    input: {
      answers: {
        filter: {
          assetIdIn: 'id_in',
          orderBy: 0,
        },
        pager: {
          pageIndex: 3,
          pageSize: 7,
        }
      }
    }
  }]

  testCases.forEach(function(testCase) {
    if ((process.env.TEST_CASE || testCase.name) !== testCase.name) return;
    testCase.input.answers = testCase.input.answers || {};
    testCase.input.answers = {
      body: JSON.stringify(testCase.input.answers),
    }
    testCase.input.showSetup = testCase.input.showSetup || false;
    testCase.input.path = '/service/' + testCase.service + '/action/' + testCase.action;
    testCase.input.method = 'post';
    testCase.input.service = testCase.service;
    testCase.input.action = testCase.action;
    CodeTemplate.LANGUAGES.forEach(function(language) {
      it('should generate ' + testCase.name + ' for ' + language, function() {
        let opts = {language, swagger};
        let ext = CodeTemplate.LANGUAGE_DETAILS[language].ext;
        let templateDir = __dirname + '/../codegen/templates/';
        let templateFile = templateDir + '/' + language + '.ejs.' + ext;
        let setupFile = templateDir + '/' + language + '_setup' + '.ejs.' + ext;
        opts.template = fs.readFileSync(templateFile, 'utf8').trim();
        if (fs.existsSync(setupFile)) opts.setupTemplate = fs.readFileSync(setupFile, 'utf8').trim();
        var tmpl = new CodeTemplate(opts);

        var code = tmpl.render(JSON.parse(JSON.stringify(testCase.input)));
        var dir = __dirname + '/golden/ott/' + testCase.name;
        var filename = dir + '/' + language + '.' + ext;
        if (process.env.WRITE_GOLDEN) {
          try {fs.mkdirSync(dir)} catch(e) {}
          fs.writeFileSync(filename, code);
        } else {
          expect(code).to.equal(fs.readFileSync(filename, 'utf8'));
        }
      });
    });
  });
})
