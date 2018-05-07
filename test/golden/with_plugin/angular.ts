import {Component} from '@angular/core';
import 'rxjs/add/observable/throw';

import {KalturaClient} from "kaltura-ngx-client";
// Be sure to add KalturaClient to your app's providers array,
// and KalturaClientModule to your app's imports.
import {SessionStartAction} from "kaltura-ngx-client/api/types/SessionStartAction";
import {MetadataProfileListAction} from "kaltura-ngx-client/api/types/MetadataProfileListAction";
import {KalturaSessionType} from "kaltura-ngx-client/api/types/KalturaSessionType";
import {KalturaMetadataProfileFilter} from "kaltura-ngx-client/api/types/KalturaMetadataProfileFilter";
import {KalturaFilterPager} from "kaltura-ngx-client/api/types/KalturaFilterPager";

@Component({
    selector: 'widget',
    template: `<h1>Hello world</h1>`,
})
export class WidgetComponent {
  constructor(private kaltura:KalturaClient) {
    this.kaltura.request(new SessionStartAction({
        secret: "YOUR_KALTURA_SECRET",
        userId: "YOUR_USER_ID",
        type: KalturaSessionType.admin,
        partnerId: YOUR_PARTNER_ID,
    }))
	.map(ks => {
		  this.kaltura.setDefaultRequestOptions({ks});
          this.runRequest();
		},
		error => {
		  console.error(`failed to create session with the following error "SessionStartAction"`);
		  throw error;
		})
  }

  runRequest() {
    let filter = new KalturaMetadataProfileFilter();
    let pager = new KalturaFilterPager();

    this.kaltura.request(new MetadataProfileListAction({filter, pager}))
        .map(result => {
          console.log(result);
        },
        error => {
          throw error;
        })
  }
}