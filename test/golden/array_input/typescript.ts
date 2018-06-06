export {}
import {KalturaClient} from 'kaltura-typescript-client';
import {SessionStartAction} from "kaltura-typescript-client/api/types/SessionStartAction";
import {AccessControlProfileAddAction} from "kaltura-typescript-client/api/types/AccessControlProfileAddAction";
import {KalturaSessionType} from "kaltura-typescript-client/api/types/KalturaSessionType";
import {KalturaContextType} from "kaltura-typescript-client/api/types/KalturaContextType";
import {KalturaAccessControlProfile} from "kaltura-typescript-client/api/types/KalturaAccessControlProfile";
import {KalturaRule} from "kaltura-typescript-client/api/types/KalturaRule";
import {KalturaContextTypeHolder} from "kaltura-typescript-client/api/types/KalturaContextTypeHolder";
import {KalturaCondition} from "kaltura-typescript-client/api/types/KalturaCondition";
import {KalturaDeliveryProfileCondition} from "kaltura-typescript-client/api/types/KalturaDeliveryProfileCondition";

let config = {
  clientTag: 'sample-code',
  endpointUrl: 'https://www.kaltura.com',
}
let client = new KalturaClient(config);
client.request(new SessionStartAction({
    secret: "YOUR_KALTURA_SECRET",
    userId: "YOUR_USER_ID",
    type: KalturaSessionType.admin,
    partnerId: YOUR_PARTNER_ID,
})).then(ks => {
  client.setDefaultRequestOptions({ks});
  let accessControlProfile = new KalturaAccessControlProfile();
  accessControlProfile.name = "foo";
  accessControlProfile.rules = [];
  accessControlProfile.rules[0] = new KalturaRule();
  accessControlProfile.rules[0].code = "thiscode";
  accessControlProfile.rules[0].contexts = [];
  accessControlProfile.rules[0].contexts[0] = new KalturaContextTypeHolder();
  accessControlProfile.rules[0].contexts[0].type = KalturaContextType.play;
  accessControlProfile.rules[0].contexts[1] = new KalturaContextTypeHolder();
  accessControlProfile.rules[0].conditions = [];
  accessControlProfile.rules[0].conditions[0] = new KalturaDeliveryProfileCondition();
  accessControlProfile.rules[0].conditions[0].description = "cond 1";
  accessControlProfile.rules[0].conditions[1] = new KalturaDeliveryProfileCondition();
  accessControlProfile.rules[0].conditions[1].description = "cond 2";
  accessControlProfile.rules[1] = new KalturaRule();
  accessControlProfile.rules[1].code = "second code";

  client.request(new AccessControlProfileAddAction({accessControlProfile}))
      .then(response => {
        console.log(response);
      }, err => {
        console.error(err);
      })
}, err => {
  console.error(err);
})