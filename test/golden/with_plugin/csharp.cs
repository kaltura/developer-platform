using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using Kaltura;
using Kaltura.Enums;
using Kaltura.Types;
using Kaltura.Request;
using Kaltura.Services;

namespace Kaltura {
  class CodeExample {
    static void Main(string[] args){
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
      MetadataProfileFilter filter = new MetadataProfileFilter();
      FilterPager pager = new FilterPager();

      OnCompletedHandler<ListResponse<MetadataProfile>> handler = new OnCompletedHandler<ListResponse<MetadataProfile>>(
            (ListResponse<MetadataProfile> result, Exception e) => Console.WriteLine(result));
      MetadataProfileService.List(filter, pager)
         .SetCompletion(handler)
         .Execute(client);
    }
  }
}