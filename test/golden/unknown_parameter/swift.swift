var accessControl = AccessControl()

let requestBuilder = AccessControlService.add(accessControl: accessControl)
requestBuilder.set(completion: {(result: AccessControl?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))