var accessControl = AccessControl()

var requestBuilder = AccessControlService.add(accessControl: accessControl)
requestBuilder.set(completion: {(result: AccessControl?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))