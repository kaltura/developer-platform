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
      AccessControlProfile accessControlProfile = new AccessControlProfile();
      accessControlProfile.Name = "foo";
      accessControlProfile.Rules = new List<Rule>();
      accessControlProfile.Rules.Add(new Rule());
      accessControlProfile.Rules[0].Code = "thiscode";
      accessControlProfile.Rules[0].Contexts = new List<ContextTypeHolder>();
      accessControlProfile.Rules[0].Contexts.Add(new ContextTypeHolder());
      accessControlProfile.Rules[0].Contexts[0].Type = 1;
      accessControlProfile.Rules[0].Contexts.Add(new ContextTypeHolder());
      accessControlProfile.Rules[0].Conditions = new List<Condition>();
      accessControlProfile.Rules[0].Conditions.Add(new Condition());
      accessControlProfile.Rules[0].Conditions[0].Description = "cond 1";
      accessControlProfile.Rules[0].Conditions.Add(new Condition());
      accessControlProfile.Rules[0].Conditions[1].Description = "cond 2";
      accessControlProfile.Rules.Add(new Rule());
      accessControlProfile.Rules[1].Code = "second code";

      OnCompletedHandler<AccessControlProfile> handler = new OnCompletedHandler<AccessControlProfile>(
            (AccessControlProfile result, Exception e) =>
            {
              CodeExample.PrintObject(result);
              done = true;
            });
      AccessControlProfileService.Add(accessControlProfile)
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
      int partnerId = YOUR_PARTNER_ID;
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