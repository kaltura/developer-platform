import {Component} from '@angular/core';
import 'rxjs/add/observable/throw';

import {KalturaClient} from "kaltura-ngx-client";
// Be sure to add KalturaClient to your app's providers array,
// and KalturaClientModule to your app's imports.
import {SessionStartAction} from "kaltura-ngx-client/api/types/SessionStartAction";
import {AppTokenStartSessionAction} from "kaltura-ngx-client/api/types/AppTokenStartSessionAction";
import {KalturaSessionType} from "kaltura-ngx-client/api/types/KalturaSessionType";

@Component({
    selector: 'widget',
    template: `<h1>Hello world</h1>`,
})
export class WidgetComponent {
  constructor(private kaltura:KalturaClient) {
    this.kaltura.setOptions({
      clientTag: 'sample-code',
      endpointUrl: 'https://www.kaltura.com',
    });
    this.kaltura.request(new SessionStartAction({
        secret: "YOUR_KALTURA_SECRET",
        userId: "YOUR_USER_ID",
        type: KalturaSessionType.admin,
        partnerId: 12345,
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
    let id = "";
    let tokenHash = "";
    let userId = "YOUR_USER_ID";
    let type = KalturaSessionType.user;
    let expiry = 0;
    let sessionPrivileges = "";

    this.kaltura.request(new AppTokenStartSessionAction({id, tokenHash, userId, type, expiry, sessionPrivileges}))
        .subscribe(result => {
          console.log(result);
        },
        error => {
          throw error;
        })
  }
}