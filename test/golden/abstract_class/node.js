let cuePoint = null /* KalturaCuePoint is an abstract class, please select an implementation */;

kaltura.services.cuePoint.add(cuePoint)
.execute(client)
.then(result => {
    console.log(result);
});