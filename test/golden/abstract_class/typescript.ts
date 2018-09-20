let cuePoint = null /* KalturaCuePoint is an abstract class, please select an implementation */;

client.request(new CuePointAddAction({cuePoint}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })