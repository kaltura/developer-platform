export {}
import {KalturaClient} from 'kaltura-typescript-client';
import {SessionStartAction} from "kaltura-typescript-client/api/types/SessionStartAction";
import {UploadTokenUploadAction} from "kaltura-typescript-client/api/types/UploadTokenUploadAction";
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
    partnerId: YOUR_PARTNER_ID,
})).then(ks => {
  client.setDefaultRequestOptions({ks});
  let uploadTokenId = "abcde";
  let fileData = "foobar";
  let resume = false;
  let finalChunk = true;
  let resumeAt = -1;

  client.request(new UploadTokenUploadAction({uploadTokenId, fileData, resume, finalChunk, resumeAt}))
      .then(response => {
        console.log(response);
      }, err => {
        console.error(err);
      })
}, err => {
  console.error(err);
})