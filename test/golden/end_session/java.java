EndSessionBuilder requestBuilder = SessionService.end()
    .setCompletion(new OnCompletion<Response<Void>>() {
        @Override
        public void onComplete(Response<Void> result) {
            System.out.println(result);
        }
    });