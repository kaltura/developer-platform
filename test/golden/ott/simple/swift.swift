var id = "abc"

let requestBuilder = AppTokenService.get(id: id)
requestBuilder.set(completion: {(result: AppToken?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))