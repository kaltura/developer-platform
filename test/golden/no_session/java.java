package com.kaltura.code.example;
import java.util.ArrayList;
import java.util.List;
import com.kaltura.client.enums.*;
import com.kaltura.client.types.*;
import com.kaltura.client.services.*;
import com.kaltura.client.APIOkRequestsExecutor;
import com.kaltura.client.Client;
import com.kaltura.client.Configuration;
import com.kaltura.client.services.UserService;
import com.kaltura.client.services.UserService.LoginByLoginIdUserBuilder;
import com.kaltura.client.types.ListResponse;
import com.kaltura.client.utils.response.OnCompletion;
import com.kaltura.client.utils.response.base.Response;

class CodeExample {
    public static void main(String[] args) {
        Client client = CodeExample.generateKalturaClient();
        String loginId = "foobar";
        String password = "*************";
        int partnerId = 0;
        int expiry = 86400;
        String privileges = "*";
        String otp = "";

        LoginByLoginIdUserBuilder requestBuilder = UserService.loginbyloginid(loginId, password, partnerId, expiry, privileges, otp)
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