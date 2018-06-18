package com.kaltura.code.example;
import java.util.ArrayList;
import java.util.List;
import com.kaltura.client.enums.*;
import com.kaltura.client.types.*;
import com.kaltura.client.services.*;
import com.kaltura.client.APIOkRequestsExecutor;
import com.kaltura.client.Client;
import com.kaltura.client.Configuration;
import com.kaltura.client.services.AccessControlProfileService;
import com.kaltura.client.services.AccessControlProfileService.AddAccessControlProfileBuilder;
import com.kaltura.client.types.ListResponse;
import com.kaltura.client.utils.response.OnCompletion;
import com.kaltura.client.utils.response.base.Response;

class CodeExample {
    public static void main(String[] args) {
        Client client = CodeExample.generateKalturaClient();
        AccessControlProfile accessControlProfile = new AccessControlProfile();
        accessControlProfile.setName("foo");
        accessControlProfile.setRules(new ArrayList<Rule>(2));
        accessControlProfile.getRules().set(0, new Rule());
        accessControlProfile.getRules().get(0).setCode("thiscode");
        accessControlProfile.getRules().get(0).setContexts(new ArrayList<ContextTypeHolder>(2));
        accessControlProfile.getRules().get(0).getContexts().set(0, new ContextTypeHolder());
        accessControlProfile.getRules().get(0).getContexts().get(0).setType(ContextType.PLAY.getValue());
        accessControlProfile.getRules().get(0).getContexts().set(1, new ContextTypeHolder());
        accessControlProfile.getRules().get(0).setConditions(new ArrayList<Condition>(2));
        accessControlProfile.getRules().get(0).getConditions().set(0, new DeliveryProfileCondition());
        accessControlProfile.getRules().get(0).getConditions().get(0).setDescription("cond 1");
        accessControlProfile.getRules().get(0).getConditions().set(1, new DeliveryProfileCondition());
        accessControlProfile.getRules().get(0).getConditions().get(1).setDescription("cond 2");
        accessControlProfile.getRules().set(1, new Rule());
        accessControlProfile.getRules().get(1).setCode("second code");

        AddAccessControlProfileBuilder requestBuilder = AccessControlProfileService.add(accessControlProfile)
            .setCompletion(new OnCompletion<Response<AccessControlProfile>>() {
                @Override
                public void onComplete(Response<AccessControlProfile> result) {
                    System.out.println(result);
                }
            });
        APIOkRequestsExecutor.getExecutor().queue(requestBuilder.build(client));
    }

    public static Client generateKalturaClient() {
        Configuration config = new Configuration();
        config.setEndpoint("https://www.kaltura.com/");
        Client client = new Client(config);
        try {
            String session = client.generateSessionV2(
                  "YOUR_KALTURA_SECRET",
                  "YOUR_USER_ID",
                  SessionType.ADMIN,
                  0,
                  86400, "");
            client.setSessionId(session);
        } catch (Exception e) {
            System.out.println("Failed to start Kaltura session");
            System.exit(1);
        }
        return client;
    }
}