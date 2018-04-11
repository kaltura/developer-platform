String id = "abc";

GetAppTokenBuilder requestBuilder = AppTokenService.get(id)
    .setCompletion(new OnCompletion<Response<AppToken>>() {
        @Override
        public void onComplete(Response<AppToken> result) {
            System.out.println(result);
        }
    });