QuestionCuePoint cuePoint = new QuestionCuePoint();
cuePoint.EntryId = "0_mej0it92";
cuePoint.Question = "hello world";

OnCompletedHandler<CuePoint> handler = new OnCompletedHandler<CuePoint>(
      (CuePoint result, Exception e) =>
      {
        Console.WriteLine(result);
        done = true;
      });
CuePointService.Add(cuePoint)
   .SetCompletion(handler)
   .Execute(client);