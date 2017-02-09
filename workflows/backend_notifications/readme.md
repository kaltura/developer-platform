<!--METADATA
{
  "icon": "exclamation",
  "sortOrder": 200,
  "tags": [
    "permission",
    "eventNotificationTemplate"
  ],
  "keywords": [],
  "summary": "Set up e-mail alerts and HTTP callbacks that get triggered when your videos become available."
}
-->

# Backend and Email Notifications


## Checking Permissions
Use ```permission.list``` with ```nameEqual``` set to ```'EVENTNOTIFICATION_PLUGIN_PERMISSION'``` to check to see if you have permission to use the eventNotification service.

### API Call
```json
{
  "method": "get",
  "path": "/service/permission/action/list",
  "parameters": [
    {
      "name": "filter[nameEqual]",
      "default": "EVENTNOTIFICATION_PLUGIN_PERMISSION",
      "hidden": true
    }
  ]
}
```

## Notification Template Types
Notification Templates can be used to send you an e-mail or call a particular URL under certain conditions, e.g. when a new video is uploaded.

There are two main types of templates:
* E-mail templates, which will cause an e-mail to be sent to particular users or administrators
* HTTP templates, which will cause a particular URL to be called with data for the notification event. You can [read more here](https://github.com/kaltura/server/blob/master/plugins/event_notification/providers/http/README.md) about setting up your server to handle HTTP Notifications.

Which type would you like to work with?

### API Call
```json
{
  "method": "get",
  "path": "/service/eventnotification_eventnotificationtemplate/action/listTemplates",
  "parameters": [
    {
      "name": "filter[typeEqual]",
      "enum": [
        "emailNotification.Email",
        "httpNotification.Http"
      ],
      "enumLabels": [
        "E-mail Template",
        "HTTP Template"
      ]
    }
  ]
}
```

## Choosing a Template to Clone
In order to create a new notification, you must clone one of the pre-made templates below. You can see the available templates using ```eventNotificationTemplate.listTemplates```

Choose a template to clone.

### API Call
```json
{
  "method": "get",
  "path": "/service/eventnotification_eventnotificationtemplate/action/listTemplates",
  "parameters": [
    {
      "name": "id",
      "dynamicEnum": {
        "path": "/service/eventnotification_eventnotificationtemplate/action/listTemplates",
        "method": "get",
        "parameters": [
          {
            "name": "filter[typeEqual]",
            "value": {
              "answer": "typeEqual"
            }
          }
        ],
        "array": "objects",
        "label": "name",
        "value": "id"
      }
    }
  ]
}
```

## Cloning the Template
Use the form below to fill in some additional details for your template and create it

### API Call
```json
{
  "method": "get",
  "path": "/service/eventnotification_eventnotificationtemplate/action/clone",
  "parameters": [
    {
      "name": "id",
      "dynamicValue": {
        "fromStep": 2,
        "value": "id"
      }
    }
  ]
}
```

## Viewing your Notification Templates
Use ```eventNotificationTemplate.list``` to get a list of your templates.

### API Call
```json
{
  "method": "get",
  "path": "/service/eventnotification_eventnotificationtemplate/action/list",
  "ignoreParameters": [
    "format"
  ]
}
```

## Handling HTTP Notifications
If you create an HTTP Notification, you'll need to set up your server to handle incoming notifications

Use the ```KalturaHttpNotificationClientPlugin``` library to parse incoming requests at the URL you specified.


### Sample Code (ruby)
```ruby
puts 'Kaltura Notification:' + params
```
### Sample Code (php)
```php
require_once('lib/KalturaClient.php');
require_once('lib/KalturaPlugins/KalturaHttpNotificationClientPlugin.php');

$object = unserialize($_POST['data']);
```