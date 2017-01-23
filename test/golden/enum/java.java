String secret = "YOUR_KALTURA_SECRET";
String userId = "YOUR_USER_ID";
KalturaSessionType type = KalturaSessionType.USER;
int partnerId = 0;
int expiry = 86400;
String privileges = "";

Object result = client.getSessionService().start(secret, userId, type, partnerId, expiry, privileges);
System.out.println(result);