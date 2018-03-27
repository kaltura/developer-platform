let fs = require('fs');

const WORKFLOW_DIR = __dirname + '/../workflows';

fs.readdirSync(WORKFLOW_DIR).forEach(workflow => {
  let filename = WORKFLOW_DIR + '/' + workflow + '/readme.md';
  let readme = fs.readFileSync(filename, 'utf8');
  readme = readme.replace(/### API Call\n```json\n([^`]*\n)```/g, function(full, match) {
    let apiCall = JSON.parse(match);
    if (apiCall.method) apiCall.method = 'post';
    if (apiCall.parameters && apiCall.parameters.length) {
      let body = {name: 'body', in: 'body', schema: {type: 'object', properties: {}}};
      let newParams = [];
      let value = {};
      let allHidden = true;
      let addedOne = false;
      apiCall.parameters.forEach(param => {
        if (param.dynamicEnum) {
          param.dynamicEnum.method = 'post';
          if (param.dynamicEnum.parameters) {
            let body = {};
            param.dynamicEnum.parameters.forEach(p => {
              let names = p.name.split(/\]?\[/).map(n => n.replace(']', ''));
              let obj = body;
              names.forEach((name, idx) => {
                obj = obj[name] = obj[name] || (idx === names.length - 1 ? p.value : {});
              })
            })
            param.dynamicEnum.parameters = [{name: 'body', value: JSON.stringify(body)}];
          }
        }
        if (param.dynamicValue) {
          if (param.dynamicValue.answer) {
            param.dynamicValue.answer = 'body.' + param.dynamicValue.answer.replace(/\]?\[/g, '.').replace(']', '');
          }
        }
        if (!apiCall.method || param.name === 'uiConf' || param.name === 'ks' || param.name === 'vid_slices') {
          newParams.push(param);
          return;
        }
        addedOne = true;
        if (!param.hidden) allHidden = false;
        let names = (param.name || param.group).split(/\]?\[/).map(n => n.replace(']', ''));
        delete param.name;
        delete param.group;
        let schema = body.schema;
        names.forEach((name, idx) => {
          let props = schema.properties = schema.properties || {};
          schema.type = schema.type || 'object';
          schema = props[name] = props[name] || (idx === names.length - 1 ? param : {});
        });
      });
      if (allHidden) body.hidden = true;
      if (addedOne) newParams.push(body);
      apiCall.parameters = newParams;
      if (apiCall.path === '/service/uploadtoken/action/upload') return full;
      if (workflow === 'upload' && apiCall.path === "/service/media/action/addContent") {
        body.schema.properties.resource.properties.token.type = 'string';
      } else if (workflow === 'captions' && apiCall.path === "/service/caption_captionasset/action/setContent") {
        body.schema.properties.contentResource.properties.token.type = 'string';
      } else if (workflow === 'metadata' && apiCall.path === "/service/metadata_metadata/action/delete") {
        delete body.schema.properties.objectIdEqual;
        delete body.schema.properties.metadataProfileIdEqual;
      } else if (workflow === 'player_uiconf' && apiCall.path === "/service/uiconf/action/get") {
        delete body.schema.properties.id.global;
      } else if (workflow === 'backend_notifications' && apiCall.path === "/service/eventnotification_eventnotificationtemplate/action/listTemplates") {
        if (body.schema.properties.filter) {
          let sch = body.schema.properties.filter.properties.typeEqual;
          sch['x-enumLabels'] = sch.enumLabels;
          delete sch.enumLabels;
        }
      } else if (workflow === 'leaderboard_reports' && apiCall.path === '/service/report/action/getTable') {
        body.schema.properties.pager.hidden = true;
      }
    }
    return "### API Call\n```json\n" + JSON.stringify(apiCall, null, 2) + "\n```";
  });
  fs.writeFileSync(filename, readme);
})
