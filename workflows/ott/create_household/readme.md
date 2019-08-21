<!--METADATA
{}
-->

# Create household


## Register user
## Adding your first step
Each step of the recipe should describe a single task, usually an API call.
Use this area to tell the user what's happening, and how this step relates to the
workflow as a whole.

Below, you can select an API call that the user will make in this step.
By default, all of it's parameters will be available to the user, but you can also
add them manually.

In later steps, you can use the 'Dynamic Value' section under each parameter
if you want to auto-fill the input using the users's answer from a previous
step, or a field in the API response (JSON only).

If you're making an API call, we'll auto-generate sample code in a few different
programming languages. You can also manually add code using the 'Sample Code' box below.

In manually entered sample code, you can use EJS to create templates that utilize
the user's answers in the Parameters box, or fields from the API response. For example:

```
var myName = "<%- answers.name %>";
```

At the bottom of the page, you can also include an HTML demo which will be displayed
in an iframe. This too can be an EJS template that utilizes the user's inputs or
API response. For example:

```
<h2>Search results</h2>
<% if (response) { -%>
<%   for (var i = 0; i < response.length; ++i) { -%>
  <h4><%- response[i].title %></h4>
  <p><%- response[i].description %></p>
<%   } -%>
<% } -%>
```

### API Call
```json
{
  "method": "post",
  "path": "/service/ottuser/action/register"
}
```

## Login user


### API Call
```json
{
  "method": "post",
  "path": "/service/ottuser/action/login"
}
```

## Create the household


### API Call
```json
{
  "method": "post",
  "path": "/service/household/action/add"
}
```

## Register another user


### API Call
```json
{
  "method": "post",
  "path": "/service/ottuser/action/register"
}
```

## Add user to household


### API Call
```json
{
  "method": "post",
  "path": "/service/householduser/action/add"
}
```