string entryId = "abcde";
int version = -1;

OnCompletedHandler<MediaEntry> handler = new OnCompletedHandler<MediaEntry>(
      (MediaEntry result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
MediaService.Get(entryId, version)
   .SetCompletion(handler)
   .Execute(client);