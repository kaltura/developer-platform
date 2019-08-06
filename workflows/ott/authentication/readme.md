<!--METADATA
{
  "summary": "This recipe will guide you through the steps necessary to create a Kaltura Session (ks)"
}
-->

# Authentication
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

## Starting a Kaltura Session
To generate a KS, you will need to login to the account using the user name and password used to register.

### API Call
```json
{
  "method": "post",
  "path": "/service/ottuser/action/login",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "username": {},
          "password": {},
          "udid": {}
        }
      },
      "consoleDefault": "{\"version\":\"5.2.5.17649\"}"
    }
  ]
}
```

## Checking the KS
You can validate your Kaltura session by calling session/action/get. you can use the session parameter if you wish to parse additional KS. if no KS value was provided for this field, the user ks will be parsed.

### API Call
```json
{
  "method": "post",
  "path": "/service/session/action/get",
  "parameters": [
    {
      "name": "body",
      "schema": {
        "type": "object",
        "properties": {
          "ks": {
            "dynamicValue": {
              "fromStep": 0,
              "answer": "body.ks"
            }
          }
        }
      },
      "consoleDefault": "{\"version\":\"5.2.4.43067\"}"
    }
  ]
}
```

## Finish
You can learn more about the operations used in this workflow by visiting the API Console and Documentation