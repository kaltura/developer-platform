string secret = "YOUR_KALTURA_SECRET";
string userId = "YOUR_USER_ID";
SessionType type = SessionType.USER;
int partnerId = 0;
int expiry = 86400;
string privileges = "";

OnCompletedHandler<string> handler = new OnCompletedHandler<string>(
      (string result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
SessionService.Start(secret, userId, type, partnerId, expiry, privileges)
   .SetCompletion(handler)
   .Execute(client);