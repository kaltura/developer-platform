CuePoint cuePoint = null /* KalturaCuePoint is an abstract class, please select an implementation */;

OnCompletedHandler<CuePoint> handler = new OnCompletedHandler<CuePoint>(
      (CuePoint result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
CuePointService.Add(cuePoint)
   .SetCompletion(handler)
   .Execute(client);