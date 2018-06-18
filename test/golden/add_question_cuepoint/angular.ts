let cuePoint = new KalturaQuestionCuePoint();
cuePoint.entryId = "0_mej0it92";
cuePoint.question = "hello world";

this.kaltura.request(new CuePointAddAction({cuePoint}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })