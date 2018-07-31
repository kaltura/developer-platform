var liveStreamEntry = LiveStreamEntry()
liveStreamEntry.liveStreamConfigurations = []
liveStreamEntry.liveStreamConfigurations[0] = LiveStreamConfiguration()
liveStreamEntry.liveStreamConfigurations[0].backupUrl = "abcd"
var sourceType = ""

let requestBuilder = LiveStreamService.add(liveStreamEntry: liveStreamEntry, sourceType: sourceType)
requestBuilder.set(completion: {(result: LiveStreamEntry?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))