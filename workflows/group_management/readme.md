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
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "user": {
            "properties": {
              "type": {
                "consoleDefault": 0
              },
              "id": {
                "consoleDefault": "sampleUser"
              },
              "fullName": {
                "consoleDefault": "Sample User"
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
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "user": {
            "properties": {
              "type": {
                "consoleDefault": 1
              },
              "id": {
                "consoleDefault": "sampleGroup"
              },
              "fullName": {
                "consoleDefault": "Sample Group"
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
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "groupUser": {
            "properties": {
              "userId": {
                "consoleDefault": "sampleUser"
              },
              "groupId": {
                "consoleDefault": "sampleGroup"
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
      "in": "body",
      "schema": {
        "type": "object",
        "properties": {
          "filter": {
            "properties": {
              "groupIdEqual": {
                "consoleDefault": "sampleGroup"
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

## Finish
You have now created a group and assigned a user to it. 
In order to view groups in KMS a KMS role needs to be assigned to them.
