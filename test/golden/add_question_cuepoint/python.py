
cue_point = KalturaQuestionCuePoint()
cue_point.entryId = "0_mej0it92"
cue_point.question = "hello world"

result = client.cuePoint.cuePoint.add(cue_point)
print(result)
