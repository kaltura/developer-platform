<!--METADATA
{
  "summary": "Workflow to add groups, add users to them and view users within a group"
}
-->

# Group Management
Note: In order for groups to be displayed in KMS, a user role needs to be assigned to them.

## Create a user
Users are created as a user with type USER [KalturaUserType::USER].
User ids should not contain spaces.

### API Call
```json
{
  "method": "post",
  "path": "/service/user/action/add",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "properties": {
          "user": {
            "properties": {
              "fullName": {
                "type": "string",
                "consoleDefault": "Sample User"
              },
              "id": {
                "type": "string",
                "consoleDefault": "sampleUser"
              },
              "type": {
                "description": "Enum Type: `KalturaUserType`",
                "enum": [
                  0,
                  1
                ],
                "type": "integer",
                "x-enumLabels": [
                  "USER",
                  "GROUP"
                ],
                "x-enumType": "KalturaUserType",
                "consoleDefault": 0
              }
            }
          }
        }
      }
    }
  ]
}
```

## Create a group
Groups are created as a user with type GROUP [KalturaUserType::GROUP].
User ids should not contain spaces.
Group name can be set using full name, otherwise group will show up with id.

### API Call
```json
{
  "method": "post",
  "path": "/service/user/action/add",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "properties": {
          "user": {
            "properties": {
              "fullName": {
                "type": "string",
                "consoleDefault": "Sample Group"
              },
              "id": {
                "type": "string",
                "consoleDefault": "sampleGroup"
              },
              "type": {
                "description": "Enum Type: `KalturaUserType`",
                "enum": [
                  0,
                  1
                ],
                "type": "integer",
                "x-enumLabels": [
                  "USER",
                  "GROUP"
                ],
                "x-enumType": "KalturaUserType",
                "consoleDefault": 1
              }
            }
          }
        }
      }
    }
  ]
}
```

## Add a user to a group
Add a user to group

### API Call
```json
{
  "method": "post",
  "path": "/service/groupuser/action/add",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "properties": {
          "groupUser": {
            "properties": {
              "groupId": {
                "description": "`insertOnly`",
                "type": "string",
                "consoleDefault": "sampleGroup"
              },
              "userId": {
                "description": "`insertOnly`",
                "type": "string",
                "consoleDefault": "sampleUser"
              }
            }
          }
        }
      }
    }
  ]
}
```

## List group users
This step will return all users that are associated with the group defined.

### API Call
```json
{
  "method": "post",
  "path": "/service/groupuser/action/list",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "properties": {
          "filter": {
            "properties": {}
          }
        }
      }
    }
  ]
}
```

## Finish
You have now created a group and assigned a user to it. 
In order to view groups in KMS a KMS role needs to be assigned to them.