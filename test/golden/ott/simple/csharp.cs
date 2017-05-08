string id = "abc";

OnCompletedHandler<AppToken> handler = new OnCompletedHandler<AppToken>(
      (AppToken result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
AppTokenService.Get(id)
   .SetCompletion(handler)
   .Execute(client);