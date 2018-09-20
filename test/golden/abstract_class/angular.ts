let cuePoint = null /* KalturaCuePoint is an abstract class, please select an implementation */;

this.kaltura.request(new CuePointAddAction({cuePoint}))
    .subscribe(result => {
      console.log(result);
    },
    error => {
      throw error;
    })