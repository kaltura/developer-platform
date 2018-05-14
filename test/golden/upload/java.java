String uploadTokenId = "";
file fileData = null;
boolean resume = false;
boolean finalChunk = true;
number resumeAt = -1;

UploadUploadTokenBuilder requestBuilder = UploadTokenService.upload(uploadTokenId, fileData, resume, finalChunk, resumeAt)
    .setCompletion(new OnCompletion<Response<UploadToken>>() {
        @Override
        public void onComplete(Response<UploadToken> result) {
            System.out.println(result);
        }
    });