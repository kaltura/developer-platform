let requestBuilder = SessionService.end()
requestBuilder.set(completion: {(result: ?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))