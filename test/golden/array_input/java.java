package com.kaltura.code.example;
import java.util.ArrayList;
import com.kaltura.client.enums.*;
import com.kaltura.client.types.*;
import com.kaltura.client.services.*;
import com.kaltura.client.types.APIException;
import com.kaltura.client.KalturaClient;
import com.kaltura.client.KalturaConfiguration;

class CodeExample {
  public static void main(String[] args) {
    try {
      KalturaClient client = CodeExample.generateKalturaClient();
      KalturaAccessControlProfile accessControlProfile = new KalturaAccessControlProfile();
      accessControlProfile.name = "foo";
      accessControlProfile.rules = new ArrayList<KalturaRule>(2);
      accessControlProfile.rules.set(0, new KalturaRule());
      accessControlProfile.rules.get(0).code = "thiscode";
      accessControlProfile.rules.get(0).contexts = new ArrayList<KalturaContextTypeHolder>(2);
      accessControlProfile.rules.get(0).contexts.set(0, new KalturaContextTypeHolder());
      accessControlProfile.rules.get(0).contexts.get(0).type = 1;
      accessControlProfile.rules.get(0).contexts.set(1, new KalturaContextTypeHolder());
      accessControlProfile.rules.get(0).conditions = new ArrayList<KalturaCondition>(2);
      accessControlProfile.rules.get(0).conditions.set(0, new KalturaCondition());
      accessControlProfile.rules.get(0).conditions.get(0).description = "cond 1";
      accessControlProfile.rules.get(0).conditions.set(1, new KalturaCondition());
      accessControlProfile.rules.get(0).conditions.get(1).description = "cond 2";
      accessControlProfile.rules.set(1, new KalturaRule());
      accessControlProfile.rules.get(1).code = "second code";

      Object result = client.getAccessControlProfileService().add(accessControlProfile);
      System.out.println(result);
    } catch (KalturaApiException e) {
      e.printStackTrace();
    }
  }

  public static KalturaClient generateKalturaClient() throws KalturaApiException {
    KalturaConfiguration config = new KalturaConfiguration();
    config.setEndpoint("https://www.kaltura.com/");
    KalturaClient client = new KalturaClient(config);
    String session = client.getSessionService().start(
          "YOUR_KALTURA_SECRET",
          "YOUR_USER_ID",
          KalturaSessionType.ADMIN,
          YOUR_PARTNER_ID);
    client.setKs(session);
    return client;
  }
}
