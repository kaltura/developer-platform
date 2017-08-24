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
      },
      "enum": [
        772,
        782,
        792,
        802,
        812,
        822,
        832,
        842,
        852,
        862,
        872,
        3692,
        3702,
        3712,
        3722,
        3732,
        3742,
        3752,
        3762,
        3772,
        4322,
        4332,
        4492,
        4502,
        4512,
        4522,
        4532,
        4542,
        4552,
        4562
      ],
      "enumLabels": [
        "New Item Pending Moderation",
        "New Item Pending Moderation",
        "Entry Approved In Category",
        "Entry Rejected In Category",
        "Entry Rejected",
        "Entry Approved",
        "Entry Ready",
        "User was added to category as [role]",
        "User's role was changed in category",
        "User was removed from category",
        "Entry was added to channel",
        "Entry Status Changed",
        "Entry Status Equals",
        "Entry Changed",
        "Metadata Field Changed",
        "Metadata Field Equals",
        "Entry-Distribution Created",
        "Entry-Distribution Status Changed",
        "Entry Added to Category",
        "Entry-Category Status Changed",
        "Entry Distribution Status Changed",
        "Entry Status Equals",
        "Categories CSV - Bulk Job Completed Successfully",
        "Categories CSV - Bulk Job Completed with Errors",
        "Categories CSV - Bulk Job Failed",
        "End-Users CSV - Bulk Job Completed Successfully",
        "End-Users CSV - Bulk Job Completed with Errors",
        "End-Users CSV - Bulk Job Failed",
        "End-User Entitlements CSV - Bulk Job Completed Successfully",
        "End-User Entitlements CSV - Bulk Job Completed with Errors"
      ]
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
  "parameters": [
    {
      "enum": [
        "+createdAt",
        "+id",
        "+updatedAt",
        "-createdAt",
        "-id",
        "-updatedAt"
      ],
      "in": "query",
      "name": "filter[orderBy]",
      "type": "string",
      "x-enumLabels": [
        "CREATED_AT_ASC",
        "ID_ASC",
        "UPDATED_AT_ASC",
        "CREATED_AT_DESC",
        "ID_DESC",
        "UPDATED_AT_DESC"
      ],
      "x-enumType": "KalturaEventNotificationTemplateOrderBy",
      "x-group": "filter",
      "group": "filter",
      "enumLabels": [
        "CREATED_AT_ASC",
        "ID_ASC",
        "UPDATED_AT_ASC",
        "CREATED_AT_DESC",
        "ID_DESC",
        "UPDATED_AT_DESC"
      ]
    },
    {
      "enum": [
        "KalturaAttributeCondition",
        "KalturaCategoryEntryAdvancedFilter",
        "KalturaCategoryUserAdvancedFilter",
        "KalturaContentDistributionSearchItem",
        "KalturaEntryCaptionAssetSearchItem",
        "KalturaEntryCuePointSearchFilter",
        "KalturaEntryTranscriptAssetSearchItem",
        "KalturaForensicWatermarkAdvancedFilter",
        "KalturaIndexAdvancedFilter",
        "KalturaQuizAdvancedFilter",
        "KalturaSearchCondition",
        "KalturaSearchOperator",
        "KalturaViewHistoryUserEntryAdvancedFilter",
        "KalturaSearchComparableAttributeCondition",
        "KalturaSearchMatchAttributeCondition",
        "KalturaBaseEntryCompareAttributeCondition",
        "KalturaDataEntryCompareAttributeCondition",
        "KalturaDocumentEntryCompareAttributeCondition",
        "KalturaExternalMediaEntryCompareAttributeCondition",
        "KalturaLiveChannelCompareAttributeCondition",
        "KalturaLiveEntryCompareAttributeCondition",
        "KalturaLiveStreamAdminEntryCompareAttributeCondition",
        "KalturaLiveStreamEntryCompareAttributeCondition",
        "KalturaMediaEntryCompareAttributeCondition",
        "KalturaMixEntryCompareAttributeCondition",
        "KalturaPlayableEntryCompareAttributeCondition",
        "KalturaPlaylistCompareAttributeCondition",
        "KalturaBaseEntryMatchAttributeCondition",
        "KalturaDataEntryMatchAttributeCondition",
        "KalturaDocumentEntryMatchAttributeCondition",
        "KalturaExternalMediaEntryMatchAttributeCondition",
        "KalturaLiveChannelMatchAttributeCondition",
        "KalturaLiveEntryMatchAttributeCondition",
        "KalturaLiveStreamAdminEntryMatchAttributeCondition",
        "KalturaLiveStreamEntryMatchAttributeCondition",
        "KalturaMediaEntryMatchAttributeCondition",
        "KalturaMixEntryMatchAttributeCondition",
        "KalturaPlayableEntryMatchAttributeCondition",
        "KalturaPlaylistMatchAttributeCondition",
        "KalturaSearchComparableCondition",
        "KalturaSearchMatchCondition",
        "KalturaDynamicObjectSearchItem",
        "KalturaMetadataSearchItem"
      ],
      "in": "query",
      "name": "filter[advancedSearch][objectType]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "group": "filter[advancedSearch]"
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][value]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaAttributeCondition",
          "KalturaSearchCondition",
          "KalturaSearchComparableAttributeCondition",
          "KalturaSearchMatchAttributeCondition",
          "KalturaBaseEntryCompareAttributeCondition",
          "KalturaDataEntryCompareAttributeCondition",
          "KalturaDocumentEntryCompareAttributeCondition",
          "KalturaExternalMediaEntryCompareAttributeCondition",
          "KalturaLiveChannelCompareAttributeCondition",
          "KalturaLiveEntryCompareAttributeCondition",
          "KalturaLiveStreamAdminEntryCompareAttributeCondition",
          "KalturaLiveStreamEntryCompareAttributeCondition",
          "KalturaMediaEntryCompareAttributeCondition",
          "KalturaMixEntryCompareAttributeCondition",
          "KalturaPlayableEntryCompareAttributeCondition",
          "KalturaPlaylistCompareAttributeCondition",
          "KalturaBaseEntryMatchAttributeCondition",
          "KalturaDataEntryMatchAttributeCondition",
          "KalturaDocumentEntryMatchAttributeCondition",
          "KalturaExternalMediaEntryMatchAttributeCondition",
          "KalturaLiveChannelMatchAttributeCondition",
          "KalturaLiveEntryMatchAttributeCondition",
          "KalturaLiveStreamAdminEntryMatchAttributeCondition",
          "KalturaLiveStreamEntryMatchAttributeCondition",
          "KalturaMediaEntryMatchAttributeCondition",
          "KalturaMixEntryMatchAttributeCondition",
          "KalturaPlayableEntryMatchAttributeCondition",
          "KalturaPlaylistMatchAttributeCondition",
          "KalturaSearchComparableCondition",
          "KalturaSearchMatchCondition"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaAttributeCondition",
          "KalturaSearchCondition",
          "KalturaSearchComparableAttributeCondition",
          "KalturaSearchMatchAttributeCondition",
          "KalturaBaseEntryCompareAttributeCondition",
          "KalturaDataEntryCompareAttributeCondition",
          "KalturaDocumentEntryCompareAttributeCondition",
          "KalturaExternalMediaEntryCompareAttributeCondition",
          "KalturaLiveChannelCompareAttributeCondition",
          "KalturaLiveEntryCompareAttributeCondition",
          "KalturaLiveStreamAdminEntryCompareAttributeCondition",
          "KalturaLiveStreamEntryCompareAttributeCondition",
          "KalturaMediaEntryCompareAttributeCondition",
          "KalturaMixEntryCompareAttributeCondition",
          "KalturaPlayableEntryCompareAttributeCondition",
          "KalturaPlaylistCompareAttributeCondition",
          "KalturaBaseEntryMatchAttributeCondition",
          "KalturaDataEntryMatchAttributeCondition",
          "KalturaDocumentEntryMatchAttributeCondition",
          "KalturaExternalMediaEntryMatchAttributeCondition",
          "KalturaLiveChannelMatchAttributeCondition",
          "KalturaLiveEntryMatchAttributeCondition",
          "KalturaLiveStreamAdminEntryMatchAttributeCondition",
          "KalturaLiveStreamEntryMatchAttributeCondition",
          "KalturaMediaEntryMatchAttributeCondition",
          "KalturaMixEntryMatchAttributeCondition",
          "KalturaPlayableEntryMatchAttributeCondition",
          "KalturaPlaylistMatchAttributeCondition",
          "KalturaSearchComparableCondition",
          "KalturaSearchMatchCondition"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][categoriesMatchOr]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryEntryAdvancedFilter",
          "KalturaMetadataSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryEntryAdvancedFilter",
          "KalturaMetadataSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][categoryEntryStatusIn]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryEntryAdvancedFilter",
          "KalturaMetadataSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryEntryAdvancedFilter",
          "KalturaMetadataSearchItem"
        ]
      }
    },
    {
      "description": "Enum Type: `KalturaCategoryEntryAdvancedOrderBy`",
      "enum": [
        "+createdAt",
        "-createdAt"
      ],
      "in": "query",
      "name": "filter[advancedSearch][orderBy]",
      "type": "string",
      "x-enumLabels": [
        "CREATED_AT_ASC",
        "CREATED_AT_DESC"
      ],
      "x-enumType": "KalturaCategoryEntryAdvancedOrderBy",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryEntryAdvancedFilter",
          "KalturaMetadataSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "enumLabels": [
        "CREATED_AT_ASC",
        "CREATED_AT_DESC"
      ],
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryEntryAdvancedFilter",
          "KalturaMetadataSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][categoryIdEqual]",
      "type": "integer",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryEntryAdvancedFilter",
          "KalturaMetadataSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryEntryAdvancedFilter",
          "KalturaMetadataSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][memberIdEq]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryUserAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryUserAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][memberIdIn]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryUserAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryUserAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][memberPermissionsMatchOr]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryUserAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryUserAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][memberPermissionsMatchAnd]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryUserAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaCategoryUserAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][noDistributionProfiles]",
      "type": "boolean",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][distributionProfileId]",
      "type": "integer",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      }
    },
    {
      "description": "Enum Type: `KalturaEntryDistributionSunStatus`",
      "enum": [
        1,
        2,
        3
      ],
      "in": "query",
      "name": "filter[advancedSearch][distributionSunStatus]",
      "type": "integer",
      "x-enumLabels": [
        "BEFORE_SUNRISE",
        "AFTER_SUNRISE",
        "AFTER_SUNSET"
      ],
      "x-enumType": "KalturaEntryDistributionSunStatus",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "enumLabels": [
        "BEFORE_SUNRISE",
        "AFTER_SUNRISE",
        "AFTER_SUNSET"
      ],
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      }
    },
    {
      "description": "Enum Type: `KalturaEntryDistributionFlag`",
      "enum": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "in": "query",
      "name": "filter[advancedSearch][entryDistributionFlag]",
      "type": "integer",
      "x-enumLabels": [
        "NONE",
        "SUBMIT_REQUIRED",
        "DELETE_REQUIRED",
        "UPDATE_REQUIRED",
        "ENABLE_REQUIRED",
        "DISABLE_REQUIRED"
      ],
      "x-enumType": "KalturaEntryDistributionFlag",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "enumLabels": [
        "NONE",
        "SUBMIT_REQUIRED",
        "DELETE_REQUIRED",
        "UPDATE_REQUIRED",
        "ENABLE_REQUIRED",
        "DISABLE_REQUIRED"
      ],
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      }
    },
    {
      "description": "Enum Type: `KalturaEntryDistributionStatus`",
      "enum": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "in": "query",
      "name": "filter[advancedSearch][entryDistributionStatus]",
      "type": "integer",
      "x-enumLabels": [
        "PENDING",
        "QUEUED",
        "READY",
        "DELETED",
        "SUBMITTING",
        "UPDATING",
        "DELETING",
        "ERROR_SUBMITTING",
        "ERROR_UPDATING",
        "ERROR_DELETING",
        "REMOVED",
        "IMPORT_SUBMITTING",
        "IMPORT_UPDATING"
      ],
      "x-enumType": "KalturaEntryDistributionStatus",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "enumLabels": [
        "PENDING",
        "QUEUED",
        "READY",
        "DELETED",
        "SUBMITTING",
        "UPDATING",
        "DELETING",
        "ERROR_SUBMITTING",
        "ERROR_UPDATING",
        "ERROR_DELETING",
        "REMOVED",
        "IMPORT_SUBMITTING",
        "IMPORT_UPDATING"
      ],
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][hasEntryDistributionValidationErrors]",
      "type": "boolean",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      }
    },
    {
      "description": "Comma seperated validation error types",
      "in": "query",
      "name": "filter[advancedSearch][entryDistributionValidationErrors]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaContentDistributionSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][contentLike]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCaptionAssetSearchItem",
          "KalturaEntryTranscriptAssetSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCaptionAssetSearchItem",
          "KalturaEntryTranscriptAssetSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][contentMultiLikeOr]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCaptionAssetSearchItem",
          "KalturaEntryTranscriptAssetSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCaptionAssetSearchItem",
          "KalturaEntryTranscriptAssetSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][contentMultiLikeAnd]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCaptionAssetSearchItem",
          "KalturaEntryTranscriptAssetSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCaptionAssetSearchItem",
          "KalturaEntryTranscriptAssetSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][cuePointsFreeText]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCuePointSearchFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCuePointSearchFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][cuePointTypeIn]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCuePointSearchFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCuePointSearchFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][cuePointSubTypeEqual]",
      "type": "integer",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCuePointSearchFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaEntryCuePointSearchFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][watermarkId]",
      "type": "integer",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaForensicWatermarkAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaForensicWatermarkAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][indexIdGreaterThan]",
      "type": "integer",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaIndexAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaIndexAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][depthGreaterThanEqual]",
      "type": "integer",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaIndexAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaIndexAdvancedFilter"
        ]
      }
    },
    {
      "description": "Enum Type: `KalturaNullableBoolean`",
      "enum": [
        -1,
        0,
        1
      ],
      "in": "query",
      "name": "filter[advancedSearch][isQuiz]",
      "type": "integer",
      "x-enumLabels": [
        "NULL_VALUE",
        "FALSE_VALUE",
        "TRUE_VALUE"
      ],
      "x-enumType": "KalturaNullableBoolean",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaQuizAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "enumLabels": [
        "NULL_VALUE",
        "FALSE_VALUE",
        "TRUE_VALUE"
      ],
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaQuizAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][field]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaSearchCondition",
          "KalturaSearchComparableCondition",
          "KalturaSearchMatchCondition",
          "KalturaDynamicObjectSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaSearchCondition",
          "KalturaSearchComparableCondition",
          "KalturaSearchMatchCondition",
          "KalturaDynamicObjectSearchItem"
        ]
      }
    },
    {
      "description": "Enum Type: `KalturaSearchOperatorType`",
      "enum": [
        1,
        2
      ],
      "in": "query",
      "name": "filter[advancedSearch][type]",
      "type": "integer",
      "x-enumLabels": [
        "SEARCH_AND",
        "SEARCH_OR"
      ],
      "x-enumType": "KalturaSearchOperatorType",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaSearchOperator",
          "KalturaDynamicObjectSearchItem",
          "KalturaMetadataSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "enumLabels": [
        "SEARCH_AND",
        "SEARCH_OR"
      ],
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaSearchOperator",
          "KalturaDynamicObjectSearchItem",
          "KalturaMetadataSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "items": {
        "anyOf": [
          {
            "description": "`abstract`",
            "properties": {},
            "title": "KalturaSearchItem",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "description": "`abstract`",
            "properties": {
              "value": {
                "type": "string"
              }
            },
            "title": "KalturaAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "categoriesMatchOr": {
                "type": "string"
              },
              "categoryEntryStatusIn": {
                "type": "string"
              },
              "categoryIdEqual": {
                "type": "integer"
              },
              "orderBy": {
                "description": "Enum Type: `KalturaCategoryEntryAdvancedOrderBy`",
                "enum": [
                  "+createdAt",
                  "-createdAt"
                ],
                "type": "string",
                "x-enumLabels": [
                  "CREATED_AT_ASC",
                  "CREATED_AT_DESC"
                ],
                "x-enumType": "KalturaCategoryEntryAdvancedOrderBy"
              }
            },
            "title": "KalturaCategoryEntryAdvancedFilter",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "memberIdEq": {
                "type": "string"
              },
              "memberIdIn": {
                "type": "string"
              },
              "memberPermissionsMatchAnd": {
                "type": "string"
              },
              "memberPermissionsMatchOr": {
                "type": "string"
              }
            },
            "title": "KalturaCategoryUserAdvancedFilter",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "distributionProfileId": {
                "type": "integer"
              },
              "distributionSunStatus": {
                "description": "Enum Type: `KalturaEntryDistributionSunStatus`",
                "enum": [
                  1,
                  2,
                  3
                ],
                "type": "integer",
                "x-enumLabels": [
                  "BEFORE_SUNRISE",
                  "AFTER_SUNRISE",
                  "AFTER_SUNSET"
                ],
                "x-enumType": "KalturaEntryDistributionSunStatus"
              },
              "entryDistributionFlag": {
                "description": "Enum Type: `KalturaEntryDistributionFlag`",
                "enum": [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5
                ],
                "type": "integer",
                "x-enumLabels": [
                  "NONE",
                  "SUBMIT_REQUIRED",
                  "DELETE_REQUIRED",
                  "UPDATE_REQUIRED",
                  "ENABLE_REQUIRED",
                  "DISABLE_REQUIRED"
                ],
                "x-enumType": "KalturaEntryDistributionFlag"
              },
              "entryDistributionStatus": {
                "description": "Enum Type: `KalturaEntryDistributionStatus`",
                "enum": [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "type": "integer",
                "x-enumLabels": [
                  "PENDING",
                  "QUEUED",
                  "READY",
                  "DELETED",
                  "SUBMITTING",
                  "UPDATING",
                  "DELETING",
                  "ERROR_SUBMITTING",
                  "ERROR_UPDATING",
                  "ERROR_DELETING",
                  "REMOVED",
                  "IMPORT_SUBMITTING",
                  "IMPORT_UPDATING"
                ],
                "x-enumType": "KalturaEntryDistributionStatus"
              },
              "entryDistributionValidationErrors": {
                "description": "Comma seperated validation error types",
                "type": "string"
              },
              "hasEntryDistributionValidationErrors": {
                "type": "boolean"
              },
              "noDistributionProfiles": {
                "type": "boolean"
              }
            },
            "title": "KalturaContentDistributionSearchItem",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "contentLike": {
                "type": "string"
              },
              "contentMultiLikeAnd": {
                "type": "string"
              },
              "contentMultiLikeOr": {
                "type": "string"
              }
            },
            "title": "KalturaEntryCaptionAssetSearchItem",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "cuePointSubTypeEqual": {
                "type": "integer"
              },
              "cuePointTypeIn": {
                "type": "string"
              },
              "cuePointsFreeText": {
                "type": "string"
              }
            },
            "title": "KalturaEntryCuePointSearchFilter",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "contentLike": {
                "type": "string"
              },
              "contentMultiLikeAnd": {
                "type": "string"
              },
              "contentMultiLikeOr": {
                "type": "string"
              }
            },
            "title": "KalturaEntryTranscriptAssetSearchItem",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "watermarkId": {
                "type": "integer"
              }
            },
            "title": "KalturaForensicWatermarkAdvancedFilter",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "depthGreaterThanEqual": {
                "type": "integer"
              },
              "indexIdGreaterThan": {
                "type": "integer"
              }
            },
            "title": "KalturaIndexAdvancedFilter",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "isQuiz": {
                "description": "Enum Type: `KalturaNullableBoolean`",
                "enum": [
                  -1,
                  0,
                  1
                ],
                "type": "integer",
                "x-enumLabels": [
                  "NULL_VALUE",
                  "FALSE_VALUE",
                  "TRUE_VALUE"
                ],
                "x-enumType": "KalturaNullableBoolean"
              }
            },
            "title": "KalturaQuizAdvancedFilter",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "field": {
                "type": "string"
              },
              "value": {
                "type": "string"
              }
            },
            "title": "KalturaSearchCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "items": {
                "items": {
                  "description": "`abstract`",
                  "properties": {},
                  "title": "KalturaSearchItem",
                  "type": "object"
                },
                "type": "array"
              },
              "type": {
                "description": "Enum Type: `KalturaSearchOperatorType`",
                "enum": [
                  1,
                  2
                ],
                "type": "integer",
                "x-enumLabels": [
                  "SEARCH_AND",
                  "SEARCH_OR"
                ],
                "x-enumType": "KalturaSearchOperatorType"
              }
            },
            "title": "KalturaSearchOperator",
            "type": "object"
          },
          {
            "allOf": [
              {
                "description": "`abstract`",
                "properties": {},
                "title": "KalturaSearchItem",
                "type": "object"
              }
            ],
            "properties": {
              "extendedStatusEqual": {
                "description": "Enum Type: `KalturaUserEntryExtendedStatus`",
                "enum": [
                  "viewHistory.PLAYBACK_COMPLETE",
                  "viewHistory.PLAYBACK_STARTED",
                  "viewHistory.VIEWED"
                ],
                "type": "string",
                "x-enumLabels": [
                  "PLAYBACK_COMPLETE",
                  "PLAYBACK_STARTED",
                  "VIEWED"
                ],
                "x-enumType": "KalturaUserEntryExtendedStatus"
              },
              "extendedStatusIn": {
                "type": "string"
              },
              "idEqual": {
                "type": "string"
              },
              "idIn": {
                "type": "string"
              },
              "updatedAtGreaterThanOrEqual": {
                "type": "string"
              },
              "updatedAtLessThanOrEqual": {
                "type": "string"
              },
              "userIdEqual": {
                "type": "string"
              },
              "userIdIn": {
                "type": "string"
              }
            },
            "title": "KalturaViewHistoryUserEntryAdvancedFilter",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "description": "`abstract`",
                    "properties": {},
                    "title": "KalturaSearchItem",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "title": "KalturaAttributeCondition",
                "type": "object"
              }
            ],
            "description": "`abstract`",
            "properties": {
              "comparison": {
                "description": "Enum Type: `KalturaSearchConditionComparison`",
                "enum": [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6"
                ],
                "type": "string",
                "x-enumLabels": [
                  "EQUAL",
                  "GREATER_THAN",
                  "GREATER_THAN_OR_EQUAL",
                  "LESS_THAN",
                  "LESS_THAN_OR_EQUAL",
                  "NOT_EQUAL"
                ],
                "x-enumType": "KalturaSearchConditionComparison"
              }
            },
            "title": "KalturaSearchComparableAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "description": "`abstract`",
                    "properties": {},
                    "title": "KalturaSearchItem",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "value": {
                    "type": "string"
                  }
                },
                "title": "KalturaAttributeCondition",
                "type": "object"
              }
            ],
            "description": "`abstract`",
            "properties": {
              "not": {
                "type": "boolean"
              }
            },
            "title": "KalturaSearchMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaBaseEntry attributes. Use KalturaBaseEntryCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaBaseEntryCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "moderationCount",
                  "moderationStatus",
                  "partnerId",
                  "partnerSortValue",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT"
                ],
                "x-enumType": "KalturaBaseEntryCompareAttribute"
              }
            },
            "title": "KalturaBaseEntryCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaDataEntry attributes. Use KalturaDataEntryCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaDataEntryCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "moderationCount",
                  "moderationStatus",
                  "partnerId",
                  "partnerSortValue",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT"
                ],
                "x-enumType": "KalturaDataEntryCompareAttribute"
              }
            },
            "title": "KalturaDataEntryCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaDocumentEntry attributes. Use KalturaDocumentEntryCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaDocumentEntryCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "moderationCount",
                  "moderationStatus",
                  "partnerId",
                  "partnerSortValue",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT"
                ],
                "x-enumType": "KalturaDocumentEntryCompareAttribute"
              }
            },
            "title": "KalturaDocumentEntryCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaExternalMediaEntry attributes. Use KalturaExternalMediaEntryCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaExternalMediaEntryCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "lastPlayedAt",
                  "mediaDate",
                  "mediaType",
                  "moderationCount",
                  "moderationStatus",
                  "msDuration",
                  "partnerId",
                  "partnerSortValue",
                  "plays",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt",
                  "views"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "LAST_PLAYED_AT",
                  "MEDIA_DATE",
                  "MEDIA_TYPE",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "MS_DURATION",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "PLAYS",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT",
                  "VIEWS"
                ],
                "x-enumType": "KalturaExternalMediaEntryCompareAttribute"
              }
            },
            "title": "KalturaExternalMediaEntryCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaLiveChannel attributes. Use KalturaLiveChannelCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaLiveChannelCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "lastPlayedAt",
                  "mediaDate",
                  "mediaType",
                  "moderationCount",
                  "moderationStatus",
                  "msDuration",
                  "partnerId",
                  "partnerSortValue",
                  "plays",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt",
                  "views"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "LAST_PLAYED_AT",
                  "MEDIA_DATE",
                  "MEDIA_TYPE",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "MS_DURATION",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "PLAYS",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT",
                  "VIEWS"
                ],
                "x-enumType": "KalturaLiveChannelCompareAttribute"
              }
            },
            "title": "KalturaLiveChannelCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaLiveEntry attributes. Use KalturaLiveEntryCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaLiveEntryCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "lastPlayedAt",
                  "mediaDate",
                  "mediaType",
                  "moderationCount",
                  "moderationStatus",
                  "msDuration",
                  "partnerId",
                  "partnerSortValue",
                  "plays",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt",
                  "views"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "LAST_PLAYED_AT",
                  "MEDIA_DATE",
                  "MEDIA_TYPE",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "MS_DURATION",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "PLAYS",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT",
                  "VIEWS"
                ],
                "x-enumType": "KalturaLiveEntryCompareAttribute"
              }
            },
            "title": "KalturaLiveEntryCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaLiveStreamAdminEntry attributes. Use KalturaLiveStreamAdminEntryCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaLiveStreamAdminEntryCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "lastPlayedAt",
                  "mediaDate",
                  "mediaType",
                  "moderationCount",
                  "moderationStatus",
                  "msDuration",
                  "partnerId",
                  "partnerSortValue",
                  "plays",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt",
                  "views"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "LAST_PLAYED_AT",
                  "MEDIA_DATE",
                  "MEDIA_TYPE",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "MS_DURATION",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "PLAYS",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT",
                  "VIEWS"
                ],
                "x-enumType": "KalturaLiveStreamAdminEntryCompareAttribute"
              }
            },
            "title": "KalturaLiveStreamAdminEntryCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaLiveStreamEntry attributes. Use KalturaLiveStreamEntryCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaLiveStreamEntryCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "lastPlayedAt",
                  "mediaDate",
                  "mediaType",
                  "moderationCount",
                  "moderationStatus",
                  "msDuration",
                  "partnerId",
                  "partnerSortValue",
                  "plays",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt",
                  "views"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "LAST_PLAYED_AT",
                  "MEDIA_DATE",
                  "MEDIA_TYPE",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "MS_DURATION",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "PLAYS",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT",
                  "VIEWS"
                ],
                "x-enumType": "KalturaLiveStreamEntryCompareAttribute"
              }
            },
            "title": "KalturaLiveStreamEntryCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaMediaEntry attributes. Use KalturaMediaEntryCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaMediaEntryCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "lastPlayedAt",
                  "mediaDate",
                  "mediaType",
                  "moderationCount",
                  "moderationStatus",
                  "msDuration",
                  "partnerId",
                  "partnerSortValue",
                  "plays",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt",
                  "views"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "LAST_PLAYED_AT",
                  "MEDIA_DATE",
                  "MEDIA_TYPE",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "MS_DURATION",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "PLAYS",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT",
                  "VIEWS"
                ],
                "x-enumType": "KalturaMediaEntryCompareAttribute"
              }
            },
            "title": "KalturaMediaEntryCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaMixEntry attributes. Use KalturaMixEntryCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaMixEntryCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "lastPlayedAt",
                  "moderationCount",
                  "moderationStatus",
                  "msDuration",
                  "partnerId",
                  "partnerSortValue",
                  "plays",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt",
                  "views"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "LAST_PLAYED_AT",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "MS_DURATION",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "PLAYS",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT",
                  "VIEWS"
                ],
                "x-enumType": "KalturaMixEntryCompareAttribute"
              }
            },
            "title": "KalturaMixEntryCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaPlayableEntry attributes. Use KalturaPlayableEntryCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaPlayableEntryCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "lastPlayedAt",
                  "moderationCount",
                  "moderationStatus",
                  "msDuration",
                  "partnerId",
                  "partnerSortValue",
                  "plays",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt",
                  "views"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "LAST_PLAYED_AT",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "MS_DURATION",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "PLAYS",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT",
                  "VIEWS"
                ],
                "x-enumType": "KalturaPlayableEntryCompareAttribute"
              }
            },
            "title": "KalturaPlayableEntryCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "comparison": {
                    "description": "Enum Type: `KalturaSearchConditionComparison`",
                    "enum": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6"
                    ],
                    "type": "string",
                    "x-enumLabels": [
                      "EQUAL",
                      "GREATER_THAN",
                      "GREATER_THAN_OR_EQUAL",
                      "LESS_THAN",
                      "LESS_THAN_OR_EQUAL",
                      "NOT_EQUAL"
                    ],
                    "x-enumType": "KalturaSearchConditionComparison"
                  }
                },
                "title": "KalturaSearchComparableAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaPlaylist attributes. Use KalturaPlaylistCompareAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaPlaylistCompareAttribute`",
                "enum": [
                  "accessControlId",
                  "createdAt",
                  "endDate",
                  "moderationCount",
                  "moderationStatus",
                  "partnerId",
                  "partnerSortValue",
                  "rank",
                  "replacementStatus",
                  "startDate",
                  "status",
                  "totalRank",
                  "type",
                  "updatedAt"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ACCESS_CONTROL_ID",
                  "CREATED_AT",
                  "END_DATE",
                  "MODERATION_COUNT",
                  "MODERATION_STATUS",
                  "PARTNER_ID",
                  "PARTNER_SORT_VALUE",
                  "RANK",
                  "REPLACEMENT_STATUS",
                  "START_DATE",
                  "STATUS",
                  "TOTAL_RANK",
                  "TYPE",
                  "UPDATED_AT"
                ],
                "x-enumType": "KalturaPlaylistCompareAttribute"
              }
            },
            "title": "KalturaPlaylistCompareAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaBaseEntry attributes. Use KalturaBaseEntryMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaBaseEntryMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaBaseEntryMatchAttribute"
              }
            },
            "title": "KalturaBaseEntryMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaDataEntry attributes. Use KalturaDataEntryMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaDataEntryMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaDataEntryMatchAttribute"
              }
            },
            "title": "KalturaDataEntryMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaDocumentEntry attributes. Use KalturaDocumentEntryMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaDocumentEntryMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaDocumentEntryMatchAttribute"
              }
            },
            "title": "KalturaDocumentEntryMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaExternalMediaEntry attributes. Use KalturaExternalMediaEntryMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaExternalMediaEntryMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "durationType",
                  "flavorParamsIds",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "DURATION_TYPE",
                  "FLAVOR_PARAMS_IDS",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaExternalMediaEntryMatchAttribute"
              }
            },
            "title": "KalturaExternalMediaEntryMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaLiveChannel attributes. Use KalturaLiveChannelMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaLiveChannelMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "durationType",
                  "flavorParamsIds",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "DURATION_TYPE",
                  "FLAVOR_PARAMS_IDS",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaLiveChannelMatchAttribute"
              }
            },
            "title": "KalturaLiveChannelMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaLiveEntry attributes. Use KalturaLiveEntryMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaLiveEntryMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "durationType",
                  "flavorParamsIds",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "DURATION_TYPE",
                  "FLAVOR_PARAMS_IDS",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaLiveEntryMatchAttribute"
              }
            },
            "title": "KalturaLiveEntryMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaLiveStreamAdminEntry attributes. Use KalturaLiveStreamAdminEntryMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaLiveStreamAdminEntryMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "durationType",
                  "flavorParamsIds",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "DURATION_TYPE",
                  "FLAVOR_PARAMS_IDS",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaLiveStreamAdminEntryMatchAttribute"
              }
            },
            "title": "KalturaLiveStreamAdminEntryMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaLiveStreamEntry attributes. Use KalturaLiveStreamEntryMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaLiveStreamEntryMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "durationType",
                  "flavorParamsIds",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "DURATION_TYPE",
                  "FLAVOR_PARAMS_IDS",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaLiveStreamEntryMatchAttribute"
              }
            },
            "title": "KalturaLiveStreamEntryMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaMediaEntry attributes. Use KalturaMediaEntryMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaMediaEntryMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "durationType",
                  "flavorParamsIds",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "DURATION_TYPE",
                  "FLAVOR_PARAMS_IDS",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaMediaEntryMatchAttribute"
              }
            },
            "title": "KalturaMediaEntryMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaMixEntry attributes. Use KalturaMixEntryMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaMixEntryMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "durationType",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "DURATION_TYPE",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaMixEntryMatchAttribute"
              }
            },
            "title": "KalturaMixEntryMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaPlayableEntry attributes. Use KalturaPlayableEntryMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaPlayableEntryMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "durationType",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "DURATION_TYPE",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaPlayableEntryMatchAttribute"
              }
            },
            "title": "KalturaPlayableEntryMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "allOf": [
                      {
                        "description": "`abstract`",
                        "properties": {},
                        "title": "KalturaSearchItem",
                        "type": "object"
                      }
                    ],
                    "description": "`abstract`",
                    "properties": {
                      "value": {
                        "type": "string"
                      }
                    },
                    "title": "KalturaAttributeCondition",
                    "type": "object"
                  }
                ],
                "description": "`abstract`",
                "properties": {
                  "not": {
                    "type": "boolean"
                  }
                },
                "title": "KalturaSearchMatchAttributeCondition",
                "type": "object"
              }
            ],
            "description": "Auto-generated class.\n Used to search KalturaPlaylist attributes. Use KalturaPlaylistMatchAttribute enum to provide attribute name.\n/",
            "properties": {
              "attribute": {
                "description": "Enum Type: `KalturaPlaylistMatchAttribute`",
                "enum": [
                  "adminTags",
                  "categoriesIds",
                  "creatorId",
                  "description",
                  "groupId",
                  "id",
                  "name",
                  "referenceId",
                  "replacedEntryId",
                  "replacingEntryId",
                  "searchText",
                  "tags",
                  "userId"
                ],
                "type": "string",
                "x-enumLabels": [
                  "ADMIN_TAGS",
                  "CATEGORIES_IDS",
                  "CREATOR_ID",
                  "DESCRIPTION",
                  "GROUP_ID",
                  "ID",
                  "NAME",
                  "REFERENCE_ID",
                  "REPLACED_ENTRY_ID",
                  "REPLACING_ENTRY_ID",
                  "SEARCH_TEXT",
                  "TAGS",
                  "USER_ID"
                ],
                "x-enumType": "KalturaPlaylistMatchAttribute"
              }
            },
            "title": "KalturaPlaylistMatchAttributeCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "description": "`abstract`",
                    "properties": {},
                    "title": "KalturaSearchItem",
                    "type": "object"
                  }
                ],
                "properties": {
                  "field": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  }
                },
                "title": "KalturaSearchCondition",
                "type": "object"
              }
            ],
            "properties": {
              "comparison": {
                "description": "Enum Type: `KalturaSearchConditionComparison`",
                "enum": [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6"
                ],
                "type": "string",
                "x-enumLabels": [
                  "EQUAL",
                  "GREATER_THAN",
                  "GREATER_THAN_OR_EQUAL",
                  "LESS_THAN",
                  "LESS_THAN_OR_EQUAL",
                  "NOT_EQUAL"
                ],
                "x-enumType": "KalturaSearchConditionComparison"
              }
            },
            "title": "KalturaSearchComparableCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "description": "`abstract`",
                    "properties": {},
                    "title": "KalturaSearchItem",
                    "type": "object"
                  }
                ],
                "properties": {
                  "field": {
                    "type": "string"
                  },
                  "value": {
                    "type": "string"
                  }
                },
                "title": "KalturaSearchCondition",
                "type": "object"
              }
            ],
            "properties": {
              "not": {
                "type": "boolean"
              }
            },
            "title": "KalturaSearchMatchCondition",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "description": "`abstract`",
                    "properties": {},
                    "title": "KalturaSearchItem",
                    "type": "object"
                  }
                ],
                "properties": {
                  "items": {
                    "items": {
                      "description": "`abstract`",
                      "properties": {},
                      "title": "KalturaSearchItem",
                      "type": "object"
                    },
                    "type": "array"
                  },
                  "type": {
                    "description": "Enum Type: `KalturaSearchOperatorType`",
                    "enum": [
                      1,
                      2
                    ],
                    "type": "integer",
                    "x-enumLabels": [
                      "SEARCH_AND",
                      "SEARCH_OR"
                    ],
                    "x-enumType": "KalturaSearchOperatorType"
                  }
                },
                "title": "KalturaSearchOperator",
                "type": "object"
              }
            ],
            "properties": {
              "field": {
                "type": "string"
              }
            },
            "title": "KalturaDynamicObjectSearchItem",
            "type": "object"
          },
          {
            "allOf": [
              {
                "allOf": [
                  {
                    "description": "`abstract`",
                    "properties": {},
                    "title": "KalturaSearchItem",
                    "type": "object"
                  }
                ],
                "properties": {
                  "items": {
                    "items": {
                      "description": "`abstract`",
                      "properties": {},
                      "title": "KalturaSearchItem",
                      "type": "object"
                    },
                    "type": "array"
                  },
                  "type": {
                    "description": "Enum Type: `KalturaSearchOperatorType`",
                    "enum": [
                      1,
                      2
                    ],
                    "type": "integer",
                    "x-enumLabels": [
                      "SEARCH_AND",
                      "SEARCH_OR"
                    ],
                    "x-enumType": "KalturaSearchOperatorType"
                  }
                },
                "title": "KalturaSearchOperator",
                "type": "object"
              }
            ],
            "properties": {
              "metadataProfileId": {
                "type": "integer"
              },
              "orderBy": {
                "type": "string"
              }
            },
            "title": "KalturaMetadataSearchItem",
            "type": "object"
          }
        ],
        "type": "object"
      },
      "name": "filter[advancedSearch][items]",
      "type": "array",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaSearchOperator",
          "KalturaDynamicObjectSearchItem",
          "KalturaMetadataSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaSearchOperator",
          "KalturaDynamicObjectSearchItem",
          "KalturaMetadataSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][idEqual]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][idIn]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][userIdEqual]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][userIdIn]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][updatedAtGreaterThanOrEqual]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][updatedAtLessThanOrEqual]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      }
    },
    {
      "description": "Enum Type: `KalturaUserEntryExtendedStatus`",
      "enum": [
        "viewHistory.PLAYBACK_COMPLETE",
        "viewHistory.PLAYBACK_STARTED",
        "viewHistory.VIEWED"
      ],
      "in": "query",
      "name": "filter[advancedSearch][extendedStatusEqual]",
      "type": "string",
      "x-enumLabels": [
        "PLAYBACK_COMPLETE",
        "PLAYBACK_STARTED",
        "VIEWED"
      ],
      "x-enumType": "KalturaUserEntryExtendedStatus",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "enumLabels": [
        "PLAYBACK_COMPLETE",
        "PLAYBACK_STARTED",
        "VIEWED"
      ],
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][extendedStatusIn]",
      "type": "string",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaViewHistoryUserEntryAdvancedFilter"
        ]
      }
    },
    {
      "description": "Enum Type: `KalturaSearchConditionComparison`",
      "enum": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"
      ],
      "in": "query",
      "name": "filter[advancedSearch][comparison]",
      "type": "string",
      "x-enumLabels": [
        "EQUAL",
        "GREATER_THAN",
        "GREATER_THAN_OR_EQUAL",
        "LESS_THAN",
        "LESS_THAN_OR_EQUAL",
        "NOT_EQUAL"
      ],
      "x-enumType": "KalturaSearchConditionComparison",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaSearchComparableAttributeCondition",
          "KalturaBaseEntryCompareAttributeCondition",
          "KalturaDataEntryCompareAttributeCondition",
          "KalturaDocumentEntryCompareAttributeCondition",
          "KalturaExternalMediaEntryCompareAttributeCondition",
          "KalturaLiveChannelCompareAttributeCondition",
          "KalturaLiveEntryCompareAttributeCondition",
          "KalturaLiveStreamAdminEntryCompareAttributeCondition",
          "KalturaLiveStreamEntryCompareAttributeCondition",
          "KalturaMediaEntryCompareAttributeCondition",
          "KalturaMixEntryCompareAttributeCondition",
          "KalturaPlayableEntryCompareAttributeCondition",
          "KalturaPlaylistCompareAttributeCondition",
          "KalturaSearchComparableCondition"
        ]
      },
      "group": "filter[advancedSearch]",
      "enumLabels": [
        "EQUAL",
        "GREATER_THAN",
        "GREATER_THAN_OR_EQUAL",
        "LESS_THAN",
        "LESS_THAN_OR_EQUAL",
        "NOT_EQUAL"
      ],
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaSearchComparableAttributeCondition",
          "KalturaBaseEntryCompareAttributeCondition",
          "KalturaDataEntryCompareAttributeCondition",
          "KalturaDocumentEntryCompareAttributeCondition",
          "KalturaExternalMediaEntryCompareAttributeCondition",
          "KalturaLiveChannelCompareAttributeCondition",
          "KalturaLiveEntryCompareAttributeCondition",
          "KalturaLiveStreamAdminEntryCompareAttributeCondition",
          "KalturaLiveStreamEntryCompareAttributeCondition",
          "KalturaMediaEntryCompareAttributeCondition",
          "KalturaMixEntryCompareAttributeCondition",
          "KalturaPlayableEntryCompareAttributeCondition",
          "KalturaPlaylistCompareAttributeCondition",
          "KalturaSearchComparableCondition"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][not]",
      "type": "boolean",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaSearchMatchAttributeCondition",
          "KalturaBaseEntryMatchAttributeCondition",
          "KalturaDataEntryMatchAttributeCondition",
          "KalturaDocumentEntryMatchAttributeCondition",
          "KalturaExternalMediaEntryMatchAttributeCondition",
          "KalturaLiveChannelMatchAttributeCondition",
          "KalturaLiveEntryMatchAttributeCondition",
          "KalturaLiveStreamAdminEntryMatchAttributeCondition",
          "KalturaLiveStreamEntryMatchAttributeCondition",
          "KalturaMediaEntryMatchAttributeCondition",
          "KalturaMixEntryMatchAttributeCondition",
          "KalturaPlayableEntryMatchAttributeCondition",
          "KalturaPlaylistMatchAttributeCondition",
          "KalturaSearchMatchCondition"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaSearchMatchAttributeCondition",
          "KalturaBaseEntryMatchAttributeCondition",
          "KalturaDataEntryMatchAttributeCondition",
          "KalturaDocumentEntryMatchAttributeCondition",
          "KalturaExternalMediaEntryMatchAttributeCondition",
          "KalturaLiveChannelMatchAttributeCondition",
          "KalturaLiveEntryMatchAttributeCondition",
          "KalturaLiveStreamAdminEntryMatchAttributeCondition",
          "KalturaLiveStreamEntryMatchAttributeCondition",
          "KalturaMediaEntryMatchAttributeCondition",
          "KalturaMixEntryMatchAttributeCondition",
          "KalturaPlayableEntryMatchAttributeCondition",
          "KalturaPlaylistMatchAttributeCondition",
          "KalturaSearchMatchCondition"
        ]
      }
    },
    {
      "description": "Enum Type: `KalturaBaseEntryCompareAttribute`",
      "enum": [
        "accessControlId",
        "createdAt",
        "endDate",
        "moderationCount",
        "moderationStatus",
        "partnerId",
        "partnerSortValue",
        "rank",
        "replacementStatus",
        "startDate",
        "status",
        "totalRank",
        "type",
        "updatedAt"
      ],
      "in": "query",
      "name": "filter[advancedSearch][attribute]",
      "type": "string",
      "x-enumLabels": [
        "ACCESS_CONTROL_ID",
        "CREATED_AT",
        "END_DATE",
        "MODERATION_COUNT",
        "MODERATION_STATUS",
        "PARTNER_ID",
        "PARTNER_SORT_VALUE",
        "RANK",
        "REPLACEMENT_STATUS",
        "START_DATE",
        "STATUS",
        "TOTAL_RANK",
        "TYPE",
        "UPDATED_AT"
      ],
      "x-enumType": "KalturaBaseEntryCompareAttribute",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaBaseEntryCompareAttributeCondition",
          "KalturaDataEntryCompareAttributeCondition",
          "KalturaDocumentEntryCompareAttributeCondition",
          "KalturaExternalMediaEntryCompareAttributeCondition",
          "KalturaLiveChannelCompareAttributeCondition",
          "KalturaLiveEntryCompareAttributeCondition",
          "KalturaLiveStreamAdminEntryCompareAttributeCondition",
          "KalturaLiveStreamEntryCompareAttributeCondition",
          "KalturaMediaEntryCompareAttributeCondition",
          "KalturaMixEntryCompareAttributeCondition",
          "KalturaPlayableEntryCompareAttributeCondition",
          "KalturaPlaylistCompareAttributeCondition",
          "KalturaBaseEntryMatchAttributeCondition",
          "KalturaDataEntryMatchAttributeCondition",
          "KalturaDocumentEntryMatchAttributeCondition",
          "KalturaExternalMediaEntryMatchAttributeCondition",
          "KalturaLiveChannelMatchAttributeCondition",
          "KalturaLiveEntryMatchAttributeCondition",
          "KalturaLiveStreamAdminEntryMatchAttributeCondition",
          "KalturaLiveStreamEntryMatchAttributeCondition",
          "KalturaMediaEntryMatchAttributeCondition",
          "KalturaMixEntryMatchAttributeCondition",
          "KalturaPlayableEntryMatchAttributeCondition",
          "KalturaPlaylistMatchAttributeCondition"
        ]
      },
      "group": "filter[advancedSearch]",
      "enumLabels": [
        "ACCESS_CONTROL_ID",
        "CREATED_AT",
        "END_DATE",
        "MODERATION_COUNT",
        "MODERATION_STATUS",
        "PARTNER_ID",
        "PARTNER_SORT_VALUE",
        "RANK",
        "REPLACEMENT_STATUS",
        "START_DATE",
        "STATUS",
        "TOTAL_RANK",
        "TYPE",
        "UPDATED_AT"
      ],
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaBaseEntryCompareAttributeCondition",
          "KalturaDataEntryCompareAttributeCondition",
          "KalturaDocumentEntryCompareAttributeCondition",
          "KalturaExternalMediaEntryCompareAttributeCondition",
          "KalturaLiveChannelCompareAttributeCondition",
          "KalturaLiveEntryCompareAttributeCondition",
          "KalturaLiveStreamAdminEntryCompareAttributeCondition",
          "KalturaLiveStreamEntryCompareAttributeCondition",
          "KalturaMediaEntryCompareAttributeCondition",
          "KalturaMixEntryCompareAttributeCondition",
          "KalturaPlayableEntryCompareAttributeCondition",
          "KalturaPlaylistCompareAttributeCondition",
          "KalturaBaseEntryMatchAttributeCondition",
          "KalturaDataEntryMatchAttributeCondition",
          "KalturaDocumentEntryMatchAttributeCondition",
          "KalturaExternalMediaEntryMatchAttributeCondition",
          "KalturaLiveChannelMatchAttributeCondition",
          "KalturaLiveEntryMatchAttributeCondition",
          "KalturaLiveStreamAdminEntryMatchAttributeCondition",
          "KalturaLiveStreamEntryMatchAttributeCondition",
          "KalturaMediaEntryMatchAttributeCondition",
          "KalturaMixEntryMatchAttributeCondition",
          "KalturaPlayableEntryMatchAttributeCondition",
          "KalturaPlaylistMatchAttributeCondition"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[advancedSearch][metadataProfileId]",
      "type": "integer",
      "x-group": "filter[advancedSearch]",
      "x-showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaMetadataSearchItem"
        ]
      },
      "group": "filter[advancedSearch]",
      "showCondition": {
        "name": "filter[advancedSearch][objectType]",
        "value": [
          "KalturaMetadataSearchItem"
        ]
      }
    },
    {
      "in": "query",
      "name": "filter[idEqual]",
      "type": "integer",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "in": "query",
      "name": "filter[idIn]",
      "type": "string",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "in": "query",
      "name": "filter[partnerIdEqual]",
      "type": "integer",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "in": "query",
      "name": "filter[partnerIdIn]",
      "type": "string",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "in": "query",
      "name": "filter[systemNameEqual]",
      "type": "string",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "in": "query",
      "name": "filter[systemNameIn]",
      "type": "string",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "description": "Enum Type: `KalturaEventNotificationTemplateType`",
      "enum": [
        "businessProcessNotification.BusinessProcessAbort",
        "businessProcessNotification.BusinessProcessSignal",
        "businessProcessNotification.BusinessProcessStart",
        "emailNotification.Email",
        "httpNotification.Http",
        "pushNotification.Push"
      ],
      "in": "query",
      "name": "filter[typeEqual]",
      "type": "string",
      "x-enumLabels": [
        "BPM_ABORT",
        "BPM_SIGNAL",
        "BPM_START",
        "EMAIL",
        "HTTP",
        "PUSH"
      ],
      "x-enumType": "KalturaEventNotificationTemplateType",
      "x-group": "filter",
      "group": "filter",
      "enumLabels": [
        "BPM_ABORT",
        "BPM_SIGNAL",
        "BPM_START",
        "EMAIL",
        "HTTP",
        "PUSH"
      ]
    },
    {
      "in": "query",
      "name": "filter[typeIn]",
      "type": "string",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "description": "Enum Type: `KalturaEventNotificationTemplateStatus`",
      "enum": [
        1,
        2,
        3
      ],
      "in": "query",
      "name": "filter[statusEqual]",
      "type": "integer",
      "x-enumLabels": [
        "DISABLED",
        "ACTIVE",
        "DELETED"
      ],
      "x-enumType": "KalturaEventNotificationTemplateStatus",
      "x-group": "filter",
      "group": "filter",
      "enumLabels": [
        "DISABLED",
        "ACTIVE",
        "DELETED"
      ]
    },
    {
      "in": "query",
      "name": "filter[statusIn]",
      "type": "string",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "in": "query",
      "name": "filter[createdAtGreaterThanOrEqual]",
      "type": "integer",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "in": "query",
      "name": "filter[createdAtLessThanOrEqual]",
      "type": "integer",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "in": "query",
      "name": "filter[updatedAtGreaterThanOrEqual]",
      "type": "integer",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "in": "query",
      "name": "filter[updatedAtLessThanOrEqual]",
      "type": "integer",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "enum": [
        "KalturaBusinessProcessNotificationTemplateBaseFilter",
        "KalturaEmailNotificationTemplateBaseFilter",
        "KalturaHttpNotificationTemplateBaseFilter",
        "KalturaPushNotificationTemplateBaseFilter",
        "KalturaBusinessProcessNotificationTemplateFilter",
        "KalturaBusinessProcessAbortNotificationTemplateBaseFilter",
        "KalturaBusinessProcessSignalNotificationTemplateBaseFilter",
        "KalturaBusinessProcessStartNotificationTemplateBaseFilter",
        "KalturaBusinessProcessAbortNotificationTemplateFilter",
        "KalturaBusinessProcessSignalNotificationTemplateFilter",
        "KalturaBusinessProcessStartNotificationTemplateFilter",
        "KalturaEmailNotificationTemplateFilter",
        "KalturaHttpNotificationTemplateFilter",
        "KalturaPushNotificationTemplateFilter"
      ],
      "in": "query",
      "name": "filter[objectType]",
      "type": "string",
      "x-group": "filter",
      "group": "filter"
    },
    {
      "description": "The number of objects to retrieve. (Default is 30, maximum page size is 500).",
      "in": "query",
      "name": "pager[pageSize]",
      "type": "integer",
      "x-group": "pager",
      "group": "pager"
    },
    {
      "description": "The page number for which {pageSize} of objects should be retrieved (Default is 1).",
      "in": "query",
      "name": "pager[pageIndex]",
      "type": "integer",
      "x-group": "pager",
      "group": "pager"
    }
  ],
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