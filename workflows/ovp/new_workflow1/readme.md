<!--METADATA
{
  "summary": "1"
}
-->

# New Workflow1
Use the text editor to write a description of what your workflow
will cover. You can use
[markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

To add the first step, click the  <i class="fa fa-plus"></i>  icon in the progress bar above.

If you want to see how your workflow looks, open the menu
<code><i class="fa fa-caret-down"></i></code>
above the progress bar (next to the title) and click `Preview`.
To come back to the editor, click `Edit` in the same menu.

Once you're done, open the menu
above the progress bar and click `Save`. We'll open a pull request in
[kaltura/developer-platform](https://github.com/kaltura/developer-platform)
which adds the new workflow. It will go live shortly after being merged.

Once it's saved to GitHub, you can always come back to your workflow by clicking the
`Load` button in the same menu. You can get the URL for your saved workflow
by going to the pull request you generated, choosing the recipe's `readme.md`
file, and clicking 'Raw'.

## New Step k
## Adding your first step DONE
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
  "path": "/service/schedule_scheduleresource/action/add",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object"
      },
      "consoleDefault": "{\"scheduleResource\":{\"objectType\":\"KalturaLocationScheduleResource\"}}"
    }
  ]
}
```

### Demo
```html
tt k?
```