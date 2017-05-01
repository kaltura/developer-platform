<!--METADATA
{
  "summary": "Workflow to add groups, add users to them and view users within a group"
}
-->

# Group management
This workflow will do the following:
1. Create a group
2. Add a user to a group
3. View users within group

Note: In order for groups to show up in KMS, a user role needs to be assigned to them.

## Create group
Groups are created as a user with type GROUP.
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

## Add user to group
Add a user to group

### API Call
```json
{
  "method": "get",
  "path": "/service/groupuser/action/add",
  "parameters": [
    {
      "name": "groupuser[userid]",
      "consoledefault": "sampleUser"
    },
    {
      "name": "groupuser[groupid]",
      "consoledefault": "sampleGroup"
    }
  ]
}
```

## View users within a group
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
