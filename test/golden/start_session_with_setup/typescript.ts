export {}
import {KalturaClient} from 'kaltura-typescript-client';
import {SessionStartAction} from "kaltura-typescript-client/api/types/SessionStartAction";
import {KalturaSessionType} from "kaltura-typescript-client/api/types/KalturaSessionType";

let config = {
  clientTag: 'sample-code',
  endpointUrl: 'https://www.kaltura.com',
}
let client = new KalturaClient(config);
let secret = "********************";
let userId = "user@example.com";
let type = KalturaSessionType.user;
let partnerId = 123456;
let expiry = 86400;
let privileges = "";

client.request(new SessionStartAction({secret, userId, type, partnerId, expiry, privileges}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })