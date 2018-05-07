import {Component} from '@angular/core';
import 'rxjs/add/observable/throw';

import {KalturaClient} from "kaltura-ngx-client";
// Be sure to add KalturaClient to your app's providers array,
// and KalturaClientModule to your app's imports.
import {SessionStartAction} from "kaltura-ngx-client/api/types/SessionStartAction";
import {AccessControlProfileAddAction} from "kaltura-ngx-client/api/types/AccessControlProfileAddAction";
import {KalturaSessionType} from "kaltura-ngx-client/api/types/KalturaSessionType";
import {KalturaContextType} from "kaltura-ngx-client/api/types/KalturaContextType";
import {KalturaAccessControlProfile} from "kaltura-ngx-client/api/types/KalturaAccessControlProfile";
import {KalturaRule} from "kaltura-ngx-client/api/types/KalturaRule";
import {KalturaContextTypeHolder} from "kaltura-ngx-client/api/types/KalturaContextTypeHolder";
import {KalturaCondition} from "kaltura-ngx-client/api/types/KalturaCondition";
import {KalturaDeliveryProfileCondition} from "kaltura-ngx-client/api/types/KalturaDeliveryProfileCondition";

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
    let accessControlProfile = new KalturaAccessControlProfile();
    accessControlProfile.name = "foo";
    accessControlProfile.rules = [];
    accessControlProfile.rules[0] = new KalturaRule();
    accessControlProfile.rules[0].code = "thiscode";
    accessControlProfile.rules[0].contexts = [];
    accessControlProfile.rules[0].contexts[0] = new KalturaContextTypeHolder();
    accessControlProfile.rules[0].contexts[0].type = KalturaContextType.play;
    accessControlProfile.rules[0].contexts[1] = new KalturaContextTypeHolder();
    accessControlProfile.rules[0].conditions = [];
    accessControlProfile.rules[0].conditions[0] = new KalturaDeliveryProfileCondition();
    accessControlProfile.rules[0].conditions[0].description = "cond 1";
    accessControlProfile.rules[0].conditions[1] = new KalturaDeliveryProfileCondition();
    accessControlProfile.rules[0].conditions[1].description = "cond 2";
    accessControlProfile.rules[1] = new KalturaRule();
    accessControlProfile.rules[1].code = "second code";

    this.kaltura.request(new AccessControlProfileAddAction({accessControlProfile}))
        .map(result => {
          console.log(result);
        },
        error => {
          throw error;
        })
  }
}