export {}
import {KalturaClient} from 'kaltura-typescript-client';
import {SessionStartAction} from "kaltura-typescript-client/api/types/SessionStartAction";
import {AppTokenStartSessionAction} from "kaltura-typescript-client/api/types/AppTokenStartSessionAction";
import {KalturaSessionType} from "kaltura-typescript-client/api/types/KalturaSessionType";

let config = {
  clientTag: 'sample-code',
  endpointUrl: 'https://www.kaltura.com',
}
let client = new KalturaClient(config);
client.request(new SessionStartAction({
    secret: "YOUR_KALTURA_SECRET",
    userId: "YOUR_USER_ID",
    type: KalturaSessionType.admin,
    partnerId: 12345,
})).then(ks => {
  client.setDefaultRequestOptions({ks});
  let id = "";
  let tokenHash = "";
  let userId = "YOUR_USER_ID";
  let type = KalturaSessionType.user;
  let expiry = 0;
  let sessionPrivileges = "";

  client.request(new AppTokenStartSessionAction({id, tokenHash, userId, type, expiry, sessionPrivileges}))
      .then(response => {
        console.log(response);
      }, err => {
        console.error(err);
      })
}, err => {
  console.error(err);
})