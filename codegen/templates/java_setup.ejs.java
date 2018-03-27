package com.kaltura.code.example;
import java.util.ArrayList;
import com.kaltura.client.enums.*;
import com.kaltura.client.types.*;
import com.kaltura.client.services.*;
import com.kaltura.client.KalturaApiException;
import com.kaltura.client.KalturaClient;
import com.kaltura.client.KalturaConfiguration;

class CodeExample {
  public static void main(String[] args) {
    try {
      KalturaClient client = CodeExample.generateKalturaClient();
<% if (serviceID !== 'session' && actionID !== 'start') { -%>
<%- codegen.indent(code, 6) %>
<% } -%>
    } catch (KalturaApiException e) {
      e.printStackTrace();
    }
  }

  public static KalturaClient generateKalturaClient() throws KalturaApiException {
    KalturaConfiguration config = new KalturaConfiguration();
    config.setEndpoint("https://www.kaltura.com/");
    KalturaClient client = new KalturaClient(config);
    String session = client.getSessionService().start(
          "<%- answers.secret %>",
          "<%- answers.userId %>",
          KalturaSessionType.ADMIN,
          <%- answers.partnerId || 'YOUR_PARTNER_ID' %>);
    client.setKs(session);
    return client;
  }
}
