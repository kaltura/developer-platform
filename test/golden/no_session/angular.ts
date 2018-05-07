import {Component} from '@angular/core';
import 'rxjs/add/observable/throw';

import {KalturaClient} from "kaltura-ngx-client";
// Be sure to add KalturaClient to your app's providers array,
// and KalturaClientModule to your app's imports.
import {SessionStartAction} from "kaltura-ngx-client/api/types/SessionStartAction";
import {UserLoginByLoginIdAction} from "kaltura-ngx-client/api/types/UserLoginByLoginIdAction";
import {KalturaSessionType} from "kaltura-ngx-client/api/types/KalturaSessionType";

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
    let loginId = "foobar";
    let password = "*************";
    let partnerId = 0;
    let expiry = 86400;
    let privileges = "*";
    let otp = "";

    this.kaltura.request(new UserLoginByLoginIdAction({loginId, password, partnerId, expiry, privileges, otp}))
        .map(result => {
          console.log(result);
        },
        error => {
          throw error;
        })
  }
}