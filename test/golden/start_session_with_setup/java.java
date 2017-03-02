package com.kaltura.code.example;
import com.kaltura.client.enums.*;
import com.kaltura.client.types.*;
import com.kaltura.client.services.*;
import com.kaltura.client.KalturaApiException;
import com.kaltura.client.KalturaClient;
import com.kaltura.client.KalturaConfiguration;

class CodeExample {
  public static void main(String[] args) {
    try {
      KalturaConfiguration config = new KalturaConfiguration();
      config.setEndpoint("https://www.kaltura.com/");
      KalturaClient client = new KalturaClient(config);
      String session = client.getSessionService().start(
            "secretsauce",
            "YOUR_USER_ID",
            KalturaSessionType.ADMIN,
            1234);
      client.setKs(session);

    } catch (KalturaApiException e) {
      e.printStackTrace();
    }
  }
}