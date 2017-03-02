
cuePoint = KalturaQuestionCuePoint()
cuePoint.entryId = "0_mej0it92"
cuePoint.question = "hello world"

result = client.cuepoint.cuePoint.add(cuePoint);
print(result);
