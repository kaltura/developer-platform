var cuePoint = null /* KalturaCuePoint is an abstract class, please select an implementation */

let requestBuilder = CuePointService.add(cuePoint: cuePoint)
requestBuilder.set(completion: {(result: CuePoint?, error: ApiException?) in
	print(result!)
	done()
})
executor.send(request: requestBuilder.build(client))