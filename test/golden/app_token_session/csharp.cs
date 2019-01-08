using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using Kaltura;
using Kaltura.Enums;
using Kaltura.Types;
using Kaltura.Request;
using Kaltura.Services;
using System.Threading;

namespace Kaltura {
  class CodeExample {
    static void Main(string[] args) {
      Client client = CodeExample.createKalturaClient();
      bool done = false;
      string id = "";
      string tokenHash = "";
      string userId = "YOUR_USER_ID";
      SessionType type = SessionType.USER;
      int expiry = 0;
      string sessionPrivileges = "";

      OnCompletedHandler<SessionInfo> handler = new OnCompletedHandler<SessionInfo>(
            (SessionInfo result, Exception e) =>
            {
              CodeExample.PrintObject(result);
              done = true;
            });
      AppTokenService.StartSession(id, tokenHash, userId, type, expiry, sessionPrivileges)
         .SetCompletion(handler)
         .Execute(client);

      while (!done) {
        Thread.Sleep(100);
      }
    }

    static Client createKalturaClient() {
      Configuration config = new Configuration();
      config.ServiceUrl = "https://www.kaltura.com/";
      Client client = new Client(config);
      int partnerId = 12345;
      string secret = "";
      string userId = "";
      SessionType type = SessionType.ADMIN;
      int expiry = 86400;
      string privileges = "";
      client.KS = client.GenerateSession(partnerId, secret, userId, type, expiry, privileges);
      return client;
    }

    public static void PrintObject<T>(T obj) {
        var t = typeof(T);
        var props = t.GetProperties();
        StringBuilder sb = new StringBuilder();
        foreach (var item in props)
        {
            try {
              sb.Append(item.Name+ ": " +item.GetValue(obj,null)+"\n");
            } catch (Exception ex) {
              Console.WriteLine(ex.ToString());
            }
        }
        sb.AppendLine();
        Console.WriteLine(sb.ToString());
    }
  }
}