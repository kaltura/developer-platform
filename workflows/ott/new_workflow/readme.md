<!--METADATA
{
  "summary": "Purchase PPV"
}
-->

# New Workflow


## Get asset data
Get asset data. fetch the required asset file id to purchase (use it in step 2)

### API Call
```json
{
  "method": "post",
  "path": "/service/asset/action/get"
}
```

## Get the file price details
Invoke productPrice/action/list to retrieve the file price details. the relevant parameters are:
* amount
* currency
* ppvModuleId - the PPV module id

You'll use these parameters in the next step (purchase the file)

### API Call
```json
{
  "method": "post",
  "path": "/service/productprice/action/list"
}
```

## Purchase the file
Purchase the file. if the purchase was successful, the backend will return te transaction details.

### API Call
```json
{
  "method": "post",
  "path": "/service/transaction/action/purchase"
}
```