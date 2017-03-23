var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var pretty = require('pretty-data').pd;

var schemas = [{
  label: 'Syndication Feed',
  type: 'syndication',
}, {
  label: 'Bulk Upload',
  type: 'bulkUploadXml.bulkUploadXML',
}, {
  label: 'Bulk Upload Results',
  type: 'bulkUploadXml.bulkUploadResultXML',
}, {
  label: 'Cue Point Serve',
  type: 'cuePoint.serveAPI',
}, {
  label: 'Cue Point Ingest',
  type: 'cuePoint.ingestAPI',
}, {
  label: 'Drop Folder',
  type: 'dropFolderXmlBulkUpload.dropFolderXml',
}]

schemas.forEach(function(s) {
  s.downloadURL = 'http://www.kaltura.com/api_v3/index.php/service/schema/action/serve/type/' + s.type + '/name/' + s.type + '.xsd';
  s.htmlURL = 'http://www.kaltura.com/api_v3/xsdDoc/index.php?type=' + s.type;
})

var SCHEMA_MD = fs.readFileSync(__dirname + '/../../markdown/templates/schema.md', 'utf8');
const OUTPUT_DIR = __dirname + '/../../markdown/generated/';

function getContents(s) {
  return SCHEMA_MD.replace('{{ label }}', s.label).replace('{{ html }}', s.html);
}

if (require.main === module) {
  schemas.forEach(function(s) {
    request.get(s.downloadURL, function(err, resp, body) {
      if (err || resp.statusCode !== 200) throw new Error(err || resp.statusCode);
      s.xsd = body;
      request.get(s.htmlURL, function(err, resp, body) {
        if (err || resp.statusCode !== 200) throw new Error(err || resp.statusCode);
        var $ = cheerio.load(body);
        let sections = [];
        $('#doc').contents().each(function() {
          let elem = $(this);
          if (elem.hasClass('code') || elem.hasClass('element-example')) {
            let xml = pretty.xml(elem.text()).trim();
            sections.push('```xml\n' + xml + '\n```');
          } else if (elem.is('table')) {
            sections.push('<table>' + elem.html() + '</table>');
          } else if (elem.is('hr')) {
            sections.push('--------');
          } else if (elem.is('ol')) {
            sections.push('<ol>' + elem.html() + '</ol>');
          } else if (elem.is('span')) {
            if (elem.hasClass('child-elements') || elem.hasClass('element-example-title') || elem.hasClass('child-attributes')) {
              sections.push('##### ' + elem.text())
            } else {
              sections.push('<span class="' + elem.attr('class') + '">' + elem.text() + '</span>');
            }
          } else {
            sections.push(elem.html());
          }
        })
        s.html = sections.join('\n\n');
        s.html = s.html.replace(/"xml-attribute-value"/g, '"k-xav"');
        s.html = s.html.replace(/"xml-attribute"/g, '"k-xa"');
        s.html = s.html.replace(/"xml-element-value"/g, '"k-xev"');
        s.html = s.html.replace(/"xml-element"/g, '"k-xe"');
        s.html = s.html.replace(/"element-example"/g, '"k-ee"');
        s.html = s.html.replace(/"element-title"/g, '"k-et"');
        s.html = s.html.replace(/"indent"/g, '"k-i"');
        s.html = s.html.replace(/ xmlns\:php="http:\/\/php\.net\/xsl"/g, '');
        fs.writeFileSync(OUTPUT_DIR + s.type + '.md', getContents(s));
      })
    })
  })
}
