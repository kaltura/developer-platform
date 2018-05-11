var channel = Channel()
channel.description = "foo"
channel.isActive = true

var requestBuilder = ChannelService.add(channel: channel)
requestBuilder.set(completion: {(result: Channel?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))