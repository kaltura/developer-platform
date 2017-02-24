
cue_point = KalturaQuestionCuePoint.new()
cue_point.entry_id = "0_mej0it92"
cue_point.question = "hello world"

results = client.cue_point_service.add(cue_point)
puts results.inspect