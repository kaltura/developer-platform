import {Component} from '@angular/core';
import 'rxjs/add/observable/throw';

import {KalturaClient} from "kaltura-ngx-client";
// Be sure to add KalturaClient to your app's providers array,
// and KalturaClientModule to your app's imports.
import {SessionStartAction} from "kaltura-ngx-client/api/types/SessionStartAction";
import {MediaListAction} from "kaltura-ngx-client/api/types/MediaListAction";
import {KalturaSessionType} from "kaltura-ngx-client/api/types/KalturaSessionType";
import {KalturaMediaEntryFilter} from "kaltura-ngx-client/api/types/KalturaMediaEntryFilter";
import {KalturaFilterPager} from "kaltura-ngx-client/api/types/KalturaFilterPager";

declare let window:any;

@Component({
    selector: 'widget',
    template: `<h1>Hello world</h1>`,
})
export class WidgetComponent {
  constructor(private kaltura:KalturaClient) {
    window.widget = this;
    this.kaltura.request(new SessionStartAction({
        secret: "YOUR_KALTURA_SECRET",
        userId: "YOUR_USER_ID",
        type: KalturaSessionType.admin,
        partnerId: YOUR_PARTNER_ID,
    }))
	.subscribe(ks => {
		  this.kaltura.setDefaultRequestOptions({ks});
          this.runRequest();
		},
		error => {
		  console.error(`failed to create session with the following error "SessionStartAction"`);
		  throw error;
		})
  }

  runRequest() {
    let filter = new KalturaMediaEntryFilter();
    let pager = new KalturaFilterPager();

    this.kaltura.request(new MediaListAction({filter, pager}))
        .subscribe(result => {
          console.log(result);
        },
        error => {
          throw error;
        })
  }
}
