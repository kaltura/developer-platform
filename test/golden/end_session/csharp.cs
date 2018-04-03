OnCompletedHandler<Void> handler = new OnCompletedHandler<Void>(
      (Void result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
SessionService.End()
   .SetCompletion(handler)
   .Execute(client);