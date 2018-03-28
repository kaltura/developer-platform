"use strict";

var EJS = window.ejs;

const RESERVED_NAMES = ['list', 'clone', 'delete'];
const TMPL_DIR = __dirname + '/templates';

const replaceActionSuffix = str => {
  return str.replace(/Action$/, '');
}

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

const removeKalturaPrefix = str => str.replace(/^Kaltura/, '');

const camelCaseToUnderscore = str => {
  return str.replace(/([a-z])([A-Z])/g, function(whole, lower, upper) {
    return lower + '_' + upper.toLowerCase();
  })
}

const getDefaultValueForType = (type) => {
  if (type === 'string') return '';
  if (type === 'integer' || type === 'number') return 0;
  if (type === 'float') return 0.0;
  if (type === 'boolean') return true;
  if (type === 'array') return [];
  return null;
}

const isPrimitiveSchema = schema => {
  if (schema.type === 'object' || schema.type === 'array') return false;
  if (schema.items || schema.properties) return false;
  return true;
}

const addActionSuffixIfReserved = action => {
  if (RESERVED_NAMES.indexOf(action) !== -1) action += 'Action';
  return action;
}

var language_opts = {
  default: {
    accessor: '.',
    statementPrefix: '',
    statementSuffix: '',
    objPrefix: '',
    objSuffix: '',
    enumPrefix: '',
    enumAccessor: '',
    declarationPrefix: '',
    constant: JSON.stringify,
    emptyArray: function(type, num) {return '[]'},
    arrayAccessor: function(idx) {return '[' + idx + ']'},
    rewriteAttribute: function(s) {return s},
    rewriteVariable: function(s) {return s},
    rewriteAction: function(s) {return s},
    rewriteService: function(s) {return s},
    rewriteEnum: function(s) {return s},
    rewriteType: function(s) {return s},
  },
  curl: {
    ext: 'sh',
  },
  javascript: {
    ext: 'js',
    declarationPrefix: 'var ',
    statementSuffix: ';',
    objPrefix: 'new ',
    objSuffix: '()',
    rewriteAction: addActionSuffixIfReserved,
  },
  ajax: {
    ext: 'js',
    declarationPrefix: 'var ',
    statementSuffix: ';',
    objPrefix: '',
    objSuffix: '',
    rewriteType: function(s) {
      if (s.indexOf('Kaltura') === 0) return '{objectType: "' + s + '"}';
    },
    rewriteAction: addActionSuffixIfReserved,
    rewriteService: function(s) {
      return 'Kaltura' + capitalize(s) + 'Service';
    },
    rewriteEnumValue: function(type, name, value) {
      return JSON.stringify(value) + " /* " + type + '.' + name + " */";
    },
  },
  node: {
    ext: 'js',
    declarationPrefix: 'var ',
    statementSuffix: ';',
    objPrefix: 'new Kaltura.kc.objects.',
    objSuffix: '()',
    enumPrefix: 'Kaltura.kc.enums.',
    rewriteAction: addActionSuffixIfReserved,
  },
  php: {
    ext: 'php',
    accessor: '->',
    statementSuffix: ';',
    objPrefix: 'new ',
    objSuffix: '()',
    enumAccessor: '::',
    rewriteAction: addActionSuffixIfReserved,
    rewriteVariable: s => '$' + s,
  },
  php53: {
    ext: 'php',
    accessor: '->',
    statementSuffix: ';',
    objPrefix: 'new ',
    objSuffix: '()',
    enumAccessor: '::',
    rewriteAction: addActionSuffixIfReserved,
    rewriteService: s => 'get' + s.charAt(0).toUpperCase() + s.substring(1) + 'Service()',
    rewriteVariable: s => '$' + s,
    rewriteEnum: removeKalturaPrefix,
    rewriteType: removeKalturaPrefix,
  },
  ruby: {
    ext: 'rb',
    enumAccessor: '::',
    objSuffix: '.new()',
    rewriteVariable: function(s) {
      return camelCaseToUnderscore(s)
    },
    rewriteAttribute: function(s) {
      return camelCaseToUnderscore(s)
    },
    rewriteAction: function(s) {
      s = replaceActionSuffix(s);
      return camelCaseToUnderscore(s)
    },
    rewriteService: function(s) {
      return camelCaseToUnderscore(s) + '_service';
    }
  },
  java: {
    ext: 'java',
    declarationPrefix: "<%- type %> ",
    statementSuffix: ';',
    objPrefix: 'new ',
    objSuffix: '()',
    emptyArray: function(type, num) {return 'new ArrayList<' + type + '>(' + num + ')'},
    arrayAccessor: function(idx) {return '.get(' + idx + ')'},
    arraySetter: function(idx, setter) {return '.set(' + idx + ', ' + setter + ')'},
    rewriteService: function(s) {
      return 'get' + s.charAt(0).toUpperCase() + s.substring(1) + 'Service()';
    },
    rewriteAction: function(s) {
      return replaceActionSuffix(s);
    },
    rewriteType: function(s) {
      if (s === 'string') return 'String';
      if (s === 'integer') return 'int';
      return s;
    }
  },
  csharp: {
    ext: 'cs',
    declarationPrefix: "<%- type %> ",
    statementSuffix: ';',
    objPrefix: 'new ',
    objSuffix: '()',
    emptyArray: function(type, num) {return 'new List<' + type + '>()'},
    arraySetter: function(idx, setter) {return '.Add(' + setter + ')'},
    rewriteAttribute: function(s) {
      return capitalize(s);
    },
    rewriteService: function(s) {
      return capitalize(s) + 'Service';
    },
    rewriteAction: function(s) {
      return capitalize(replaceActionSuffix(s));
    },
    rewriteType: function(s) {
      if (s.indexOf('Kaltura') === 0) return s.substring('Kaltura'.length);
      if (s === 'integer') return 'int';
      return s;
    }
  },
  python: {
    ext: 'py',
    objSuffix: '()',
    constant: function(val) {
      let c = JSON.stringify(val);
      if (typeof val === 'boolean') {
        c = c.charAt(0).toUpperCase() + c.substring(1);
      }
      return c;
    },
    rewriteAction: function(s) {
      return replaceActionSuffix(s);
    },
    rewriteService: function(name, id) {
      // e.g. name = captionAsset, id = caption_captionasset, should return caption.captionAsset
      let pieces = id.split('_');
      if (pieces.length === 1) return name;
      return pieces[0] + '.' + name;
    }
  },
}

var CodeTemplate = module.exports = function(opts) {
  this.language = opts.language;
  this.swagger = opts.swagger;
  Object.assign(this, language_opts.default, language_opts[this.language]);
  this.template = opts.template;
  this.setupTemplate = opts.setupTemplate;

  this.indent = function(code, numSpaces) {
    if (!numSpaces) return code;
    var lines = code.split('\n');
    var spaces = Array(Math.abs(numSpaces) + 1).join(' ');
    if (numSpaces > 0) {
      return lines.map(function(l) {return l ? spaces + l : l}).join('\n');
    } else {
      return lines.map(function(l) {
        if (l.indexOf(spaces) === 0) return l.substring(spaces.length);
        else return l;
      }).join('\n');
    }
  }
}

const getDefName = (ref) => {
  return ref.substring('#/definitions/'.length);
}

const maybeResolveRef = (schema, swagger) => {
  if (!schema.$ref) return schema;
  let name = getDefName(schema.$ref);
  return swagger.definitions[name];
}

CodeTemplate.prototype.render = function(input) {
  var self = this;
  if (input.path) {
    this.setOperationInputFields(input);
  }
  input = Object.assign({codegen: this}, input);
  var code = EJS.render(this.template, input);
  if (input.showSetup && this.setupTemplate) {
    input.code = code;
    return EJS.render(this.setupTemplate, input).trim();
  } else {
    return code;
  }
}

CodeTemplate.prototype.setOperationInputFields = function(input) {
  var pathParts = input.path.match(/(\/service\/(\w+)\/action\/(\w+))$/);
  this.currentInput = input;
  input.path = pathParts[1];
  input.operation = this.swagger.paths[input.path][input.method];
  let responseSchema = input.operation.responses[200].schema;
  if (responseSchema) {
    if (responseSchema.$ref) responseSchema = this.swagger.definitions[getDefName(responseSchema.$ref)];
    input.responseType = this.rewriteType(responseSchema.title || responseSchema.type);
    if (responseSchema.title && responseSchema.title.match(/ListResponse$/)) {
      let items = responseSchema.properties.objects.items;
      if (items.$ref) items = this.swagger.definitions[getDefName(items.$ref)];
      input.responseListType = this.rewriteType(items.title || items.type);
    }
  }
  input.actionID = pathParts[3];
  input.action = this.rewriteAction(input.actionID);
  input.serviceID = pathParts[2];
  input.serviceName = input.operation.tags[0];
  input.service = this.rewriteService(input.serviceName, input.serviceID);
  input.answers = input.answers || {};
  input.answers.secret = input.answers.secret || 'YOUR_KALTURA_SECRET';
  input.answers.userId = input.answers.userId || 'YOUR_USER_ID';
  input.plugins = [];
  let tag = this.swagger.tags.filter(t => t.name === input.serviceName)[0];
  if (tag['x-plugin']) {
    input.plugins.push(tag['x-plugin']);
  }
  input.parameters = [];
  let opType = input.operation['x-kaltura-format'] || 'post';
  if (opType === 'post') {
    input.parameterNames = input.operation['x-kaltura-parameters'].map(n => this.rewriteVariable(n));
    this.gatherAnswersForPost(input);
  } else {
    input.parameterNames = input.parameters.map(p => p.name).map(n => this.rewriteVariable(n));
    this.gatherAnswersForGet(input);
  }
}

CodeTemplate.prototype.gatherAnswersForPost = function(input) {
  let findSubschema = (schema, key) => {
    if (schema.$ref) schema = this.swagger.definitions[getDefName(schema.$ref)];
    if (schema.properties && schema.properties[key]) return schema.properties[key];
    let alternatives = (schema.allOf || []).concat(schema.oneOf || []);
    for (let i = 0; i < alternatives.length; ++i) {
      let alt = findSubschema(alternatives[i], key);
      if (alt) return alt;
    }
  }
  let addSchema = schema => {
    let enm = schema['x-enumType'];
    if (enm && input.enums.indexOf(enm) === -1) {
      input.enums.push(enm);
    }
    if (schema.title && input.objects.indexOf(schema.title) === -1) {
      input.objects.push(schema.title);
    }
  }
  let addAnswer = (key, answer, schema) => {
    if (schema.$ref) schema = this.swagger.definitions[getDefName(schema.$ref)];
    addSchema(schema);
    if (Array.isArray(answer)) {
      answer.forEach((ans, idx) => {
        addAnswer(key + '[' + idx + ']', ans, schema.items);
      })
    } else if (answer !== null && typeof answer === 'object') {
      if (answer.objectType) {
        schema = this.swagger.definitions[answer.objectType];
      }
      for (let subkey in answer) {
        addAnswer(key + '[' + subkey + ']', answer[subkey], findSubschema(schema, subkey));
      }
      let objectKey = key + '[objectType]';
      input.answers[objectKey] = input.answers[objectKey] || schema.title;
    } else {
      input.answers[key] = answer;
    }
  }

  let body = JSON.parse(input.answers.body || '{}');
  delete input.answers.body;
  let bodyParam = input.operation.parameters.filter(p => p.in ==='body')[0];
  input.objects = [];
  input.enums = [];

  input.operation['x-kaltura-parameters'].forEach(name => {
    let schema = bodyParam.schema.properties[name];
    if (schema.$ref) schema = this.swagger.definitions[getDefName(schema.$ref)];
    let param = {name, schema};
    input.parameters.push(param);
    addSchema(schema);
    if (name in body) addAnswer(name, body[name], schema);
    else if (schema.default !== undefined) addAnswer(name, schema.default, schema);
  });
  input.enums = input.enums.map(e => this.rewriteEnum(e));
  input.objects = input.objects.map(e => this.rewriteType(e));
}

CodeTemplate.prototype.gatherAnswersForGet = function(input) {
  let addedParameters = [];
  input.operation.parameters.forEach(p => {
    if (p.$ref) {
      let ref = p.$ref.match(/#\/parameters\/(.*)$/)[1];
      p = this.swagger.parameters[ref];
    }
    if (p.global || p['x-global']) return;
    let baseName = p.name.indexOf('[') === -1 ? p.name : p.name.substring(0, p.name.indexOf('['));
    if (addedParameters.indexOf(baseName) !== -1) return;
    addedParameters.push(baseName);
    if (baseName === p.name) {
      input.parameters.push({name: p.name, schema: p.schema || p})
    } else {
      let group = input.operation['x-parameterGroups'].filter(g => g.name === baseName)[0];
      let title = group.schema.title || getDefName(group.schema.$ref);
      let schema = this.swagger.definitions[title];
      input.parameters.push({name: group.name, schema});
    }
  })
  input.parameters.forEach(p => {
    if (input.answers[p.name] === undefined) {
      if (p.schema.default !== undefined) input.answers[p.name] = p.schema.default;
      else if (p.schema['x-consoleDefault'] !== undefined) input.answers[p.name] = p.schema['x-consoleDefault'];
    }
  })
}

CodeTemplate.prototype.assignAllParameters = function(params, answers, indent) {
  indent = indent || 0;
  let assignment = this.indent(params.map(p => this.assignment(p, answers)).join('\n'), indent);
  return assignment ? assignment + '\n\n': '';
}

CodeTemplate.prototype.assignment = function(param, answers, parent) {
  var self = this;
  let subtype = answers[param.name + '[objectType]'];
  if (subtype && subtype !== param.schema.title) {
    let newParam = {
      name: param.name,
      schema: this.swagger.definitions[subtype],
    }
    return self.assignment(newParam, answers, parent);
  }
  if (param['x-showCondition']) {
    let cond = param['x-showCondition'];
    if (cond.value.indexOf(answers[cond.name]) === -1) return;
  }

  let assignment = this.lvalue(param) + ' = ' + this.rvalue(param, answers, parent) + this.statementSuffix;
  let arrMatch = param.name.match(/\[(\d+)\]$/)
  if (arrMatch && this.arraySetter) {
    assignment = this.lvalue(param) + this.arraySetter(arrMatch[1], this.rvalue(param, answers)) + this.statementSuffix
  }

  const findSubschema = (subParamName, schema) => {
    if (schema.$ref) schema = this.swagger.definitions[schema.$ref.substring('#/definitions/'.length)];
    let propName = subParamName.split(/\[/).map(s => s.replace(/\]/g, '')).pop();
    if (propName === 'objectType') {
      return this.swagger.definitions[answers[subParamName]];
    } else if (schema.properties && schema.properties[propName]) {
      let subschema = schema.properties[propName];
      if (isPrimitiveSchema(subschema)) {
        return subschema;
      } else {
        return findSubschema(subParamName, subschema);
      }
    } else if (schema.allOf) {
      return schema.allOf.map(sub => findSubschema(subParamName, sub)).filter(s => s)[0];
    }
    return null;
  }
  if (!isPrimitiveSchema(param.schema)) {
    let subparamRegexp = '^' + param.name.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
    subparamRegexp += '\\[(\\w+)\\]';
    let objectSubparamRegexp = new RegExp(subparamRegexp + '\\[objectType\\]$')
    let arraySubparamRegexp = new RegExp(subparamRegexp + '\\[(\\d+)\\].*');
    subparamRegexp = new RegExp(subparamRegexp + '$');
    let subsetters = Object.keys(answers)
      .filter(n => n !== param.name && n.match(subparamRegexp) && !n.match(/\[objectType\]$/))
      .map(n => ({name: n, schema: findSubschema(n, param.schema)}))
    let objSubsetters = Object.keys(answers)
      .filter(n => n.match(objectSubparamRegexp))
      .map(n => ({name: n.substring(0, n.length - 12), schema: self.swagger.definitions[answers[n]]}));
    let subsetterStatements = subsetters.concat(objSubsetters)
      .filter(prop => prop.schema)
      .map(function(prop) {
        return self.assignment(prop, answers, param);
      });

    let arraySubsetterNames = Object.keys(answers)
      .map(n => n.match(arraySubparamRegexp))
      .filter(match => match)
      .map(match => match[1]);
    arraySubsetterNames = arraySubsetterNames.filter((n, idx) => arraySubsetterNames.lastIndexOf(n) === idx);
    subsetterStatements = subsetterStatements.concat(arraySubsetterNames.map(arrayName => {
      let schema = param.schema.properties[arrayName];
      let itemSchema = maybeResolveRef(schema.items, self.swagger);
      let subparam = {name: param.name + '[' + arrayName + ']', schema};
      let indices = Object.keys(answers)
        .map(n => n.match(arraySubparamRegexp))
        .filter(match => match)
        .map(match => +match[2])
      indices = indices.filter((i, idx) => indices.lastIndexOf(i) === idx);
      let statement = self.lvalue(subparam) + ' = ' + self.emptyArray(self.rewriteType(itemSchema.title), indices.length) + self.statementSuffix;
      let itemStatements = indices
        .map(index => {
          return {
            schema: itemSchema,
            name: param.name + '[' + arrayName + ']' + '[' + index + ']'
          }
        })
        .map((prop, idx) => {
          return self.assignment(prop, answers, param)
        })
      return ([statement]).concat(itemStatements).join('\n');
    }))
    assignment = ([assignment]).concat(subsetterStatements).join('\n');
  }
  return assignment;
}

CodeTemplate.prototype.lvalue = function(param) {
  var self = this;
  var isChild = param.name.indexOf('[') !== -1;
  let enumType = param.schema['x-enumType'];
  if (param.schema.oneOf && param.schema.oneOf[0].enum) {
    enumType = param.schema.title;
  }

  if (param.schema.$ref) {
    let name = param.schema.$ref.substring('#/definitions/'.length);
    param.schema = this.swagger.definitions[name];
    param.schema.title = name;
  }

  var lvalue = this.statementPrefix;
  if (isChild) {
    let attrs = param.name.split(/\[/).map(s => s.replace(/\]/g, '')).filter(n => n !== 'objectType');
    lvalue += attrs.map((a, idx) => {
      if (a.match(/^\d+$/)) {
        if (idx === attrs.length - 1 && self.arraySetter) {
          return '';
        } else {
          return self.arrayAccessor(a);
        }
      } else {
        return idx === 0 ? self.rewriteVariable(a) : self.accessor + self.rewriteAttribute(a);
      }
    }).join('');
  } else {
    let type = enumType || (isPrimitiveSchema(param.schema) ? param.schema.type : param.schema.title) || 'UnknownType';
    type = this.rewriteType(type);
    lvalue += EJS.render(self.declarationPrefix, {type}) + self.rewriteVariable(param.name);
  }
  return lvalue;
}

CodeTemplate.prototype.rvalue = function(param, answers, parent) {
  var self = this;
  let enm = param.schema.enum;
  let enumLabels = param.schema['x-enumLabels'];
  let enumType = param.schema['x-enumType'];
  if (param.schema.oneOf && param.schema.oneOf[0].enum) {
    enm = param.schema.oneOf.map(sub => sub.enum[0])
    enumLabels = param.schema.oneOf.map(sub => sub.title);
    enumType = param.schema.title;
  } else if (param.name.match(/\[orderBy\]/) && parent) {
    enumType = parent.schema.title.replace(/Filter$/, 'OrderBy');
    let enumDef = this.swagger['x-enums'][enumType];
    if (enumDef) {
      enm = enumDef.oneOf.map(s => s.enum[0]);
      enumLabels = enumDef.oneOf.map(s => s.title);
    }
  }
  let answer = answers[param.name];
  if (answer === undefined) {
    answer = getDefaultValueForType(param.schema.type);
  }

  if (!isPrimitiveSchema(param.schema)) {
    if (param.name.indexOf('[objectType]') !== -1) {
      return self.objPrefix + self.rewriteType(answer) + self.objSuffix;
    } else {
      return self.objPrefix + self.rewriteType(param.schema.title) + self.objSuffix;
    }
  } else {
    if (enm && enumLabels) {
      let enumName = enumLabels[enm.indexOf(answer)];
      if (enumName) {
        if (self.rewriteEnumValue) return self.rewriteEnumValue(enumType, enumName, answer);
        return self.enumPrefix + self.rewriteType(enumType) + (self.enumAccessor || self.accessor) + enumName;
      }
    }
    return self.constant(answer);
  }
}

CodeTemplate.LANGUAGES = Object.keys(language_opts).filter(l => l !== 'default');
CodeTemplate.LANGUAGE_DETAILS = language_opts;
