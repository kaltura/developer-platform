string secret = "a1b2c3d4e5f6g7h8i9j0";
string userId = "you@email.com";
SessionType type = SessionType.ADMIN;
int partnerId = 0000000;.
int expiry = 86400;
string privileges = "";

OnCompletedHandler<string> handler = new OnCompletedHandler<string>(
  (string result, Exception e) =>
  {
    done = true; });

SessionService.Start(secret, userId, type, partnerId, expiry, privileges)
.SetCompletion(handler)
.Execute(client);
