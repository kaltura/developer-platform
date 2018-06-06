export {}
import {KalturaClient} from 'kaltura-typescript-client';
import {SessionStartAction} from "kaltura-typescript-client/api/types/SessionStartAction";
import {MetadataProfileListAction} from "kaltura-typescript-client/api/types/MetadataProfileListAction";
import {KalturaSessionType} from "kaltura-typescript-client/api/types/KalturaSessionType";
import {KalturaMetadataProfileFilter} from "kaltura-typescript-client/api/types/KalturaMetadataProfileFilter";
import {KalturaFilterPager} from "kaltura-typescript-client/api/types/KalturaFilterPager";

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
  let filter = new KalturaMetadataProfileFilter();
  let pager = new KalturaFilterPager();

  client.request(new MetadataProfileListAction({filter, pager}))
      .then(response => {
        console.log(response);
      }, err => {
        console.error(err);
      })
}, err => {
  console.error(err);
})