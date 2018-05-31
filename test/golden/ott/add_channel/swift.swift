var channel = Channel()
channel.description = "foo"
channel.isActive = true

let requestBuilder = ChannelService.add(channel: channel)
requestBuilder.set(completion: {(result: Channel?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))