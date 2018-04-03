String entryId = "abcde";
int version = -1;

GetMediaBuilder requestBuilder = MediaService.get(entryId, version)
    .setCompletion(new OnCompletion<Response<MediaEntry>>() {
        @Override
        public void onComplete(Response<MediaEntry> result) {
            System.out.println(result);
        }
    });