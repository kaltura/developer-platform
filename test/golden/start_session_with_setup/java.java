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
    } catch (KalturaApiException e) {
      e.printStackTrace();
    }
  }

  public static KalturaClient generateKalturaClient() throws KalturaApiException {
    KalturaConfiguration config = new KalturaConfiguration();
    config.setEndpoint("https://www.kaltura.com/");
    KalturaClient client = new KalturaClient(config);
    String session = client.getSessionService().start(
          "81b50515b869628777617f454cdca7f5",
          "bobby.brennan@gmail.com",
          KalturaSessionType.ADMIN,
          2018872);
    client.setKs(session);
    return client;
  }
}