<!--METADATA
{
  "summary": "Create household with 2 users and 1 device"
}
-->

# Create an household
In this flow, we'll create a household with 2 users (master user and regular user) and we'll add a device

## Register user
We'll start by creating a user that later will be the master user in the household

## Login user
User will log in to the account in order to retrieve a ks (we will use it in the next step)

### API Call
```json
{
  "method": "post",
  "path": "/service/ottuser/action/login"
}
```

## Create household
We'll use the master user ks (from the previous step) to create a new household

### API Call
```json
{
  "method": "post",
  "path": "/service/household/action/add"
}
```

## Register regular user
we'll create an additional user that will be added to the household (see upcoming steps)


### API Call
```json
{
  "method": "post",
  "path": "/service/ottuser/action/register"
}
```

## Add user to household
We'll use the user id (generated when we've registered the user) to add the user to the household

### API Call
```json
{
  "method": "post",
  "path": "/service/householduser/action/add"
}
```

## Add device to household
We'll add a new device to the household.

### API Call
```json
{
  "method": "post",
  "path": "/service/householddevice/action/add"
}
```