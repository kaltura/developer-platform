let cuePoint = new kaltura.objects.QuestionCuePoint();
cuePoint.entryId = "0_mej0it92";
cuePoint.question = "hello world";

kaltura.services.cuePoint.add(cuePoint)
.execute(client)
.then(result => {
    console.log(result);
});