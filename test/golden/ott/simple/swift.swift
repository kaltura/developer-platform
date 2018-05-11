var id = "abc"

var requestBuilder = AppTokenService.get(id: id)
requestBuilder.set(completion: {(result: AppToken?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))