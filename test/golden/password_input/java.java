String loginId = "";
String password = "*************";
int partnerId = 0;
int expiry = 86400;
String privileges = "*";
String otp = "";

LoginByLoginIdUserBuilder requestBuilder = UserService.loginbyloginid(loginId, password, partnerId, expiry, privileges, otp)
    .setCompletion(new OnCompletion<Response<String>>() {
        @Override
        public void onComplete(Response<String> result) {
            System.out.println(result);
        }
    });