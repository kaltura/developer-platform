package com.kaltura.code.example;
import java.util.ArrayList;
import java.util.List;
import com.kaltura.client.enums.*;
import com.kaltura.client.types.*;
import com.kaltura.client.services.*;
import com.kaltura.client.APIOkRequestsExecutor;
import com.kaltura.client.Client;
import com.kaltura.client.Configuration;
import com.kaltura.client.services.SessionService;
import com.kaltura.client.services.SessionService.StartSessionBuilder;
import com.kaltura.client.types.ListResponse;
import com.kaltura.client.utils.response.OnCompletion;
import com.kaltura.client.utils.response.base.Response;

class CodeExample {
    public static void main(String[] args) {
        Client client = CodeExample.generateKalturaClient();
        String secret = "********************";
        String userId = "user@example.com";
        SessionType type = SessionType.USER;
        int partnerId = 123456;
        int expiry = 86400;
        String privileges = "";

        StartSessionBuilder requestBuilder = SessionService.start(secret, userId, type, partnerId, expiry, privileges)
            .setCompletion(new OnCompletion<Response<String>>() {
                @Override
                public void onComplete(Response<String> result) {
                    System.out.println(result);
                }
            });
        APIOkRequestsExecutor.getExecutor().queue(requestBuilder.build(client));
    }

    public static Client generateKalturaClient() {
        Configuration config = new Configuration();
        config.setEndpoint("https://www.kaltura.com/");
        Client client = new Client(config);
        return client;
    }
}