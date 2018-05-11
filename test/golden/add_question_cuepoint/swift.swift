var cuePoint = QuestionCuePoint()
cuePoint.entryId = "0_mej0it92"
cuePoint.question = "hello world"

var requestBuilder = CuePointService.add(cuePoint: cuePoint)
requestBuilder.set(completion: {(result: CuePoint?, error: ApiException?) in
  print(result)
})
executor.send(request: requestBuilder.build(client!))