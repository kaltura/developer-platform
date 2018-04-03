QuestionCuePoint cuePoint = new QuestionCuePoint();
cuePoint.setEntryId("0_mej0it92");
cuePoint.setQuestion("hello world");

AddCuePointBuilder requestBuilder = CuePointService.add(cuePoint)
    .setCompletion(new OnCompletion<Response<CuePoint>>() {
        @Override
        public void onComplete(Response<CuePoint> result) {
            System.out.println(result);
        }
    });