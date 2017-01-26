string secret = "YOUR_KALTURA_SECRET";
string userId = "YOUR_USER_ID";
SessionType type = SessionType.USER;
int partnerId = 0;
int expiry = 86400;
string privileges = "";

SessionService.Start(secret, userId, type, partnerId, expiry, privileges)
   .Execute(client);