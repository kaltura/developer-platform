LiveStreamEntry liveStreamEntry = new LiveStreamEntry();
liveStreamEntry.LiveStreamConfigurations = new List<LiveStreamConfiguration>();
liveStreamEntry.LiveStreamConfigurations.Add(new LiveStreamConfiguration());
liveStreamEntry.LiveStreamConfigurations[0].BackupUrl = "abcd";
SourceType sourceType = "";

OnCompletedHandler<LiveStreamEntry> handler = new OnCompletedHandler<LiveStreamEntry>(
      (LiveStreamEntry result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
LiveStreamService.Add(liveStreamEntry, sourceType)
   .SetCompletion(handler)
   .Execute(client);