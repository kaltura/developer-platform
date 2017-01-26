string entryId = "abcde";
int version = 0;

OnCompletedHandler<MediaEntry> handler = new OnCompletedHandler<MediaEntry>(
      (MediaEntry result, Exception e) => Console.WriteLine(result));
MediaService.Get(entryId, version)
   .SetCompletion(handler)
   .Execute(client);