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
            "YOUR_KALTURA_SECRET",
            "YOUR_USER_ID",
            KalturaSessionType.ADMIN,
            YOUR_PARTNER_ID);
      client.setKs(session);

      KalturaMetadataProfileFilter filter = new KalturaMetadataProfileFilter();
      KalturaFilterPager pager = new KalturaFilterPager();

      Object result = client.getMetadataProfileService().list(filter, pager);
      System.out.println(result);
    } catch (KalturaApiException e) {
      e.printStackTrace();
    }
  }
}