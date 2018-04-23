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
      string loginId = "foobar";
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

      while (!done) {
        Thread.Sleep(100);
      }
    }

    static Client createKalturaClient() {
      Configuration config = new Configuration();
      config.ServiceUrl = "https://www.kaltura.com/";
      Client client = new Client(config);
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