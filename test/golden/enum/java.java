String secret = "*******************";
String userId = "YOUR_USER_ID";
SessionType type = SessionType.USER.getValue();
int partnerId = 0;
int expiry = 86400;
String privileges = "";

StartSessionBuilder requestBuilder = SessionService.start(secret, userId, type, partnerId, expiry, privileges)
    .setCompletion(new OnCompletion<Response<String>>() {
        @Override
        public void onComplete(Response<String> result) {
            System.out.println(result);
        }
    });