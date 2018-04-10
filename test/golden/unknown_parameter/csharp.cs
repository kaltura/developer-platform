AccessControl accessControl = new AccessControl();

OnCompletedHandler<AccessControl> handler = new OnCompletedHandler<AccessControl>(
      (AccessControl result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
AccessControlService.Add(accessControl)
   .SetCompletion(handler)
   .Execute(client);