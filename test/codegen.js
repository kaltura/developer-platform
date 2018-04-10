"use strict";

var fs = require('fs');
var expect = require('chai').expect;

global.window = {
  ejs: require('ejs'),
}

var swagger = require('../ovp.openapi.json');

var CodeTemplate = require('../codegen');

const CONVERT_TEST_CASES_TO_POST = true;

describe('Sample Code', function() {
  this.timeout(5000);

  var testCases = [{
    name: 'simple',
    service: 'media',
    action: 'list',
    input: {
      answers: {},
      showSetup: false,
    },
  }, {
    name: 'implicit_object_type',
    service: 'elasticsearch_esearch',
    action: 'searchEntry',
    input: {
      answers: {
        'searchParams[searchOperator][searchItems][0][objectType]': 'KalturaESearchCaptionItem',
        'searchParams[searchOperator][searchItems][0][searchTerm]': 'asdf',
        'searchParams[searchOperator][operator]': 1,
      },
      showSetup: false,
    }
  }, {
    name: 'falsy_default',
    service: 'batch',
    action: 'freeExclusiveJob',
    input: {
      answers: {},
      showSetup: false,
    }
  }, {
    name: 'array_input',
    service: 'accesscontrolprofile',
    action: 'add',
    input: {
      showSetup: true,
      answers: {
        'accessControlProfile[name]': 'foo',
        'accessControlProfile[rules][0][code]': 'thiscode',
        'accessControlProfile[rules][0][contexts][0][type]': "1",
        'accessControlProfile[rules][0][conditions][0][objectType]': 'KalturaDeliveryProfileCondition',
        'accessControlProfile[rules][0][conditions][1][objectType]': 'KalturaDeliveryProfileCondition',
        'accessControlProfile[rules][0][conditions][0][description]': 'cond 1',
        'accessControlProfile[rules][0][conditions][1][description]': 'cond 2',
        'accessControlProfile[rules][1][code]': 'second code',
      }
    },
  }, {
    name: 'password_input',
    service: 'user',
    action: 'loginByLoginId',
    input: {
      answers: {
        password: 'thisisasecret',
      }
    }
  }, {
    name: 'start_session',
    service: 'session',
    action: 'start',
    input: {
      answers: {},
    }
  }, {
    name: 'start_session_with_setup',
    service: 'session',
    action: 'start',
    input: {
      answers: {
        partnerId: 123456,
        secret: '12341234123412341234',
        userId: 'user@example.com',
        type: 0,
        sessionType: 0,
      },
      showSetup: true,
    },
  }, {
    name: 'end_session',
    service: 'session',
    action: 'end',
    input: {}
  }, {
    name: 'unknown_parameter',
    service: 'accesscontrol',
    action: 'add',
    input: {
      answers: {
        uiConf: 12345,
        name: 'foobar'
      }
    }
  }, {
    name: 'add_question_cuepoint',
    service: 'cuepoint_cuepoint',
    action: 'add',
    input: {
      answers: {
       'cuePoint[objectType]': 'KalturaQuestionCuePoint',
       'cuePoint[entryId]': '0_mej0it92',
       'cuePoint[question]': 'hello world',
      }
    }
  }, {
    name: 'add_captions',
    service: 'caption_captionasset',
    action: 'add',
    input: {
      answers: {
        'captionAsset[tags]': 'stuff',
        'captionAsset[language]': "Arabic",
      }
    }
  }, {
    name: 'with_plugin',
    service: 'metadata_metadataprofile',
    action: 'list',
    input: {
      showSetup: true,
    },
  }, {
    name: 'with_setup',
    service: 'media',
    action: 'list',
    input: {
      answers: {},
      showSetup: true,
    }
  }, {
    name: 'enum',
    service: 'session',
    action: 'start',
    input: {
      answers: {
        type: 0,
      },
      showSetup: false,
    },
  }, {
    name: 'with_arguments',
    service: 'media',
    action: 'list',
    input: {
      answers: {
        'filter[nameLike]': 'foobar',
        'filter[statusEqual]': '2',
        'filter[orderBy]': '+createdAt',
        'filter[advancedSearch][objectType]': 'KalturaAttributeCondition',
        'filter[advancedSearch][value]': 'baz',
        'pager[pageSize]': 3,
      },
      showSetup: false,
    }
  }, {
    name: 'primitive_argument',
    service: 'media',
    action: 'get',
    input: {
      answers: {
        'entryId': 'abcde',
      },
      showSetup: false,
    }
  }];

  if (CONVERT_TEST_CASES_TO_POST) {
    testCases.forEach(testCase => {
      if (testCase.name === 'unknown_parameter') return;
      let body = {};
      for (let key in testCase.input.answers) {
        let parts = key.split(/\]?\[/).map(s => s.replace(']', ''));
        let obj = body;
        parts.forEach((part, idx) => {
          if (part.match(/^\d+$/)) part = parseInt(part);
          let isArr = idx < parts.length - 1 && parts[idx+1].match(/^\d+$/);
          let val = idx === parts.length - 1 ? testCase.input.answers[key] : isArr ? [] : {};
          obj = obj[part] = obj[part] || val;
        });
      }
      testCase.input.answers = {body: JSON.stringify(body)};
      if (body.sessionType !== undefined) testCase.input.answers.sessionType = body.sessionType;
    })
  }

  testCases.forEach(function(testCase) {
    CodeTemplate.LANGUAGES.forEach(function(language) {
      if ((process.env.TEST_CASE || testCase.name) !== testCase.name) return;
      it('should generate ' + testCase.name + ' for ' + language, function() {
        let opts = {language, swagger};
        let ext = CodeTemplate.LANGUAGE_DETAILS[language].ext;
        let templateDir = __dirname + '/../codegen/templates/';
        let templateFile = templateDir + '/' + language + '.ejs.' + ext;
        let setupFile = templateDir + '/' + language + '_setup' + '.ejs.' + ext;
        opts.template = fs.readFileSync(templateFile, 'utf8').trim();
        if (fs.existsSync(setupFile)) opts.setupTemplate = fs.readFileSync(setupFile, 'utf8').trim();
        var tmpl = new CodeTemplate(opts);

        testCase.input.answers = testCase.input.answers || {};
        testCase.input.showSetup = testCase.input.showSetup || false;
        testCase.input.path = '/service/' + testCase.service + '/action/' + testCase.action;
        testCase.input.method = CONVERT_TEST_CASES_TO_POST ? 'post' : 'get';
        testCase.input.service = testCase.service;
        testCase.input.action = testCase.action;
        var code = tmpl.render(JSON.parse(JSON.stringify(testCase.input)));
        var dir = __dirname + '/golden/' + testCase.name;
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
