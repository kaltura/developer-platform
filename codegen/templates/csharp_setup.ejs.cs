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
      int partnerId = <%- answers.partnerId || 'YOUR_PARTNER_ID' %>;
      string secret = "<% answers.secret %>";
      string userId = "<% answers.userId %>";
      SessionType type = <%- answers.sessionType === 0 ? 'SessionType.USER' : 'SessionType.ADMIN' %>;
      int expiry = 86400;
      string privileges = "";
      client.KS = client.GenerateSession(partnerId, secret, userId, type, expiry, privileges);

<%- codegen.indent(code, 6) %>
    }
  }
}
