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
      "name": "body"
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
      "name": "body"
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
      "name": "body"
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
      "name": "body"
    }
  ]
}
```

## Finish
You have now created a group and assigned a user to it. 
In order to view groups in KMS a KMS role needs to be assigned to them.