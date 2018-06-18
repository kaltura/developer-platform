export {}
import {KalturaClient} from 'kaltura-typescript-client';
import {SessionStartAction} from "kaltura-typescript-client/api/types/SessionStartAction";
import {UserLoginByLoginIdAction} from "kaltura-typescript-client/api/types/UserLoginByLoginIdAction";
import {KalturaSessionType} from "kaltura-typescript-client/api/types/KalturaSessionType";

let config = {
  clientTag: 'sample-code',
  endpointUrl: 'https://www.kaltura.com',
}
let client = new KalturaClient(config);
let loginId = "foobar";
let password = "*************";
let partnerId = 0;
let expiry = 86400;
let privileges = "*";
let otp = "";

client.request(new UserLoginByLoginIdAction({loginId, password, partnerId, expiry, privileges, otp}))
    .then(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })