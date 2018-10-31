import {Component} from '@angular/core';
import 'rxjs/add/observable/throw';

import {KalturaClient} from "kaltura-ngx-client";
// Be sure to add KalturaClient to your app's providers array,
// and KalturaClientModule to your app's imports.
import {SessionStartAction} from "kaltura-ngx-client/api/types/SessionStartAction";
import {UploadTokenUploadAction} from "kaltura-ngx-client/api/types/UploadTokenUploadAction";
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
    let uploadTokenId = "abcde";
    let fileData = "foobar";
    let resume = false;
    let finalChunk = true;
    let resumeAt = -1;

    this.kaltura.request(new UploadTokenUploadAction({uploadTokenId, fileData, resume, finalChunk, resumeAt}))
        .subscribe(result => {
          console.log(result);
        },
        error => {
          throw error;
        })
  }
}