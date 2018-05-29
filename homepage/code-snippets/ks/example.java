String secret = "a1b2c3d4e5f6g7h8i9j0";
String userId = "you@email.com";
KalturaSessionType type = KalturaSessionType.ADMIN;
int partnerId = 0000000;
int expiry = 86400;
String privileges = "";

Object result = client.getSessionService().start(secret, userId, type, partnerId, expiry, privileges);
System.out.println(result);
