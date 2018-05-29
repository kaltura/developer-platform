MediaEntry entry = new MediaEntry();
entry.MediaType = MediaType.VIDEO;
entry.Name = "Cat";

OnCompletedHandler<MediaEntry> handler = new OnCompletedHandler<MediaEntry>(
  (MediaEntry result, Exception e) =>
  {
    String entryId = result.id;
    KalturaUrlResource resource = new KalturaUrlResource();
    resource.url = "https://example.com/catVideo.mp4" ;

    OnCompletedHandler<MediaEntry> handler = new OnCompletedHandler<MediaEntry>(
      (MediaEntry result, Exception e) =>
      {
        done = true; });
    MediaService.AddContent(entryId, resource)
    .SetCompletion(handler)
    .Execute(client);
    done = true;  });
MediaService.Add(entry)
.SetCompletion(handler)
.Execute(client);
