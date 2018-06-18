let cuePoint = new KalturaQuestionCuePoint();
cuePoint.entryId = "0_mej0it92";
cuePoint.question = "hello world";

client.request(new CuePointAddAction({cuePoint}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })