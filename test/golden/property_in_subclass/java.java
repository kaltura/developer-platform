LiveStreamEntry liveStreamEntry = new LiveStreamEntry();
liveStreamEntry.setLiveStreamConfigurations(new ArrayList<LiveStreamConfiguration>(1));
liveStreamEntry.getLiveStreamConfigurations().set(0, new LiveStreamConfiguration());
liveStreamEntry.getLiveStreamConfigurations().get(0).setBackupUrl("abcd");
SourceType sourceType = "";

AddLiveStreamBuilder requestBuilder = LiveStreamService.add(liveStreamEntry, sourceType)
    .setCompletion(new OnCompletion<Response<LiveStreamEntry>>() {
        @Override
        public void onComplete(Response<LiveStreamEntry> result) {
            System.out.println(result);
        }
    });