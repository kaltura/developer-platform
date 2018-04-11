AccessControl accessControl = new AccessControl();

AddAccessControlBuilder requestBuilder = AccessControlService.add(accessControl)
    .setCompletion(new OnCompletion<Response<AccessControl>>() {
        @Override
        public void onComplete(Response<AccessControl> result) {
            System.out.println(result);
        }
    });