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
  "method": "get",
  "path": "/service/user/action/add",
  "parameters": [
    {
      "name": "user[type]",
      "consoleDefault": 0 
    },
    {
      "name": "user[id]",
      "consoleDefault": "sampleUser"
    },
    {
      "name": "user[fullName]",
      "consoleDefault": "Sample User"
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
  "method": "get",
  "path": "/service/user/action/add",
  "parameters": [
    {
      "name": "user[type]",
      "consoleDefault": 1 
    },
    {
      "name": "user[id]",
      "consoleDefault": "sampleGroup"
    },
    {
      "name": "user[fullName]",
      "consoleDefault": "Sample Group"
    }
  ]
}
```

## Add a user to a group
Add a user to group

### API Call
```json
{
  "method": "get",
  "path": "/service/groupuser/action/add",
  "parameters": [
    {
      "name": "groupUser[userId]",
      "consoleDefault": "sampleUser"
    },
    {
      "name": "groupUser[groupId]",
      "consoleDefault": "sampleGroup"
    }
  ]
}
```

## List group users
This step will return all users that are associated with the group defined.

### API Call
```json
{
  "method": "get",
  "path": "/service/groupuser/action/list",
  "parameters": [
    {
      "name": "filter[groupIdEqual]",
      "consoleDefault": "sampleGroup"
    }
  ]
}
```

## Finish
You have now created a group and assigned a user to it. 
In order to view groups in KMS a KMS role needs to be assigned to them.
