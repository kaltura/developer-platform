string secret = "YOUR_KALTURA_SECRET";
string userId = "YOUR_USER_ID";
KalturaSessionType type = KalturaSessionType.USER;
int partnerId = 0;
int expiry = 86400;
string privileges = "";

Object result = client.SessionService.Start(secret, userId, type, partnerId, expiry, privileges);
Console.WriteLine(result);