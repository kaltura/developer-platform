CuePoint cuePoint = null /* KalturaCuePoint is an abstract class, please select an implementation */;

AddCuePointBuilder requestBuilder = CuePointService.add(cuePoint)
    .setCompletion(new OnCompletion<Response<CuePoint>>() {
        @Override
        public void onComplete(Response<CuePoint> result) {
            System.out.println(result);
        }
    });