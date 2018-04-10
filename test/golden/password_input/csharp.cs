string loginId = "";
string password = "*************";
int partnerId = 0;
int expiry = 86400;
string privileges = "*";
string otp = "";

OnCompletedHandler<string> handler = new OnCompletedHandler<string>(
      (string result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
UserService.LoginByLoginId(loginId, password, partnerId, expiry, privileges, otp)
   .SetCompletion(handler)
   .Execute(client);