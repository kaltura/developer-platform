var accessControl = new Kaltura.kc.objects.KalturaAccessControl();

client.accessControl.add(function(results) {
  if (results && results.code && results.message) {
    console.log('Kaltura Error', results);
  } else {
    console.log('Kaltura Result', results);
  }
},
accessControl);