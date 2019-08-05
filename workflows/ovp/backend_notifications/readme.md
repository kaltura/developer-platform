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
  "method": "post",
  "path": "/service/permission/action/list",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "filter": {
            "properties": {
              "nameEqual": {
                "default": "EVENTNOTIFICATION_PLUGIN_PERMISSION",
                "hidden": true
              }
            },
            "type": "object"
          }
        }
      },
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
  "method": "post",
  "path": "/service/eventnotification_eventnotificationtemplate/action/listTemplates",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "filter": {
            "properties": {
              "typeEqual": {
                "enum": [
                  "emailNotification.Email",
                  "httpNotification.Http"
                ],
                "x-enumLabels": [
                  "E-mail Template",
                  "HTTP Template"
                ]
              }
            },
            "type": "object"
          }
        }
      }
    }
  ]
}
```

## Cloning the Template
In order to create a new notification, you must clone one of the pre-made templates below. You can see the available templates using ```eventNotificationTemplate.listTemplates```

Use the form below to choose a template to clone

### API Call
```json
{
  "method": "post",
  "path": "/service/eventnotification_eventnotificationtemplate/action/clone",
  "parameters": [
    {
      "name": "body",
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "id": {
            "dynamicEnum": {
              "path": "/service/eventnotification_eventnotificationtemplate/action/listTemplates",
              "method": "post",
              "array": "objects",
              "label": "name",
              "value": "id"
            }
          }
        }
      }
    }
  ]
}
```

## Updating your newly cloned notification
Use ```eventNotificationTemplate.update``` to edit the properties of your newly cloned event notification.

### API Call
```json
{
  "method": "post",
  "path": "/service/eventnotification_eventnotificationtemplate/action/update",
  "parameters": [{
    "name": "body",
    "in": "body",
    "schema": {
      "type": "object",
        "properties": {
          "id": {
            "dynamicValue": {
              "fromStep": 2,
              "value": "id"
            }
          },
          "eventNotificationTemplate": {
            "$ref": "#/definitions/KalturaEventNotificationTemplate"
          }
        }
      }
  }]
}
```

## Activating your newly cloned notification
Use ```eventNotificationTemplate.updateStatus``` to control your notification status.

### API Call
```json
{
  "method": "post",
  "path": "/service/eventnotification_eventnotificationtemplate/action/updateStatus",
  "parameters": [{
    "name": "body",
    "in": "body",
    "schema": {
      "type": "object",
        "properties": {
          "id": {
            "dynamicValue": {
              "fromStep": 2,
              "value": "id"
            }
          },
          "status": {}
        }
      }
  }]
}
```

## Viewing your Notification Templates
Use ```eventNotificationTemplate.list``` to get a list of your templates.

### API Call
```json
{
  "method": "post",
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
