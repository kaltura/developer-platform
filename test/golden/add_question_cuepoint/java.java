KalturaQuestionCuePoint cuePoint = new KalturaQuestionCuePoint();
cuePoint.entryId = "0_mej0it92";
cuePoint.question = "hello world";

Object result = client.getCuePointService().add(cuePoint);
System.out.println(result);