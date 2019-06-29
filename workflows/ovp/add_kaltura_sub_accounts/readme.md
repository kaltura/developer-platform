<!--METADATA
{
  "summary": "Ensure customers privacy, security and control with sub accounts"
}
-->

# Add Kaltura Sub-Accounts
The best way to ensure your customers privacy, security and control is to separate different business users to individual accounts. That way customers can customize and control their accounts and content libraries without being dependent on other customers settings and workflows.

## Multi-Account Permission Admin KS
To create sub accounts, your Kaltura parent account should be configured as a parent level multi-account. If you're unsure if you have a parent level multi-account, please contact VPaaS@kaltura.com for further details.

If you have a parent level multi-account, create a Kaltura Session of type ADMIN ([learn more](https://developer.kaltura.com/workflows/Generate_API_Sessions/Authentication)).

In the next step we will use the ADMIN KS to call the [Partner service](https://developer.kaltura.com/api-docs/service/partner) to add a new sub-account.

## Add a new Sub-Account
In this step we will use the [partner.register](https://developer.kaltura.com/api-docs/service/partner/action/register/) action, passing an instance of KalturaPartner with the required basic fields.

> The KalturaPartner object defines many fields that can be utilized as metadata to manage your many sub-accounts. We encourage you to review the docs ([KalturaPartner](https://developer.kaltura.com/api-docs/General_Objects/Objects/KalturaPartner)) to learn more.



### API Call
```json
{
  "method": "post",
  "path": "/service/partner/action/register",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "partner": {
            "type": "object",
            "properties": {
              "adminEmail": {},
              "adminName": {}
            }
          }
        }
      }
    },
    {
      "name": "ks"
    },
    {
      "name": "clientTag"
    }
  ]
}
```