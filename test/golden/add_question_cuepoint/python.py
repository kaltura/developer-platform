
cue_point = KalturaQuestionCuePoint()
cue_point.entryId = "0_mej0it92"
cue_point.question = "hello world"

result = client.cuepoint.cuePoint.add(cue_point)
print(result)
