var requestBuilder = SessionService.end()
requestBuilder.set(completion: {(result: ?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))