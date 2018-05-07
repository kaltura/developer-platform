import {Component} from '@angular/core';
import 'rxjs/add/observable/throw';

import {KalturaClient} from "kaltura-ngx-client";
// Be sure to add KalturaClient to your app's providers array,
// and KalturaClientModule to your app's imports.
import {SessionStartAction} from "kaltura-ngx-client/api/types/SessionStartAction";
import {KalturaSessionType} from "kaltura-ngx-client/api/types/KalturaSessionType";
import {KalturaSessionType} from "kaltura-ngx-client/api/types/KalturaSessionType";

declare let window:any;

@Component({
    selector: 'widget',
    template: `<h1>Hello world</h1>`,
})
export class WidgetComponent {
  constructor(private kaltura:KalturaClient) {
    window.widget = this;
    this.kaltura.request(new SessionStartAction({
        secret: "12341234123412341234",
        userId: "user@example.com",
        type: KalturaSessionType.user,
        partnerId: 123456,
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
    let secret = "********************";
    let userId = "user@example.com";
    let type = KalturaSessionType.user;
    let partnerId = 123456;
    let expiry = 86400;
    let privileges = "";

    this.kaltura.request(new SessionStartAction({secret, userId, type, partnerId, expiry, privileges}))
        .map(result => {
          console.log(result);
        },
        error => {
          throw error;
        })
  }
}