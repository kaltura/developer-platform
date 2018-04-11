Channel channel = new Channel();
channel.setDescription("foo");
channel.setIsActive(true);

AddChannelBuilder requestBuilder = ChannelService.add(channel)
    .setCompletion(new OnCompletion<Response<Channel>>() {
        @Override
        public void onComplete(Response<Channel> result) {
            System.out.println(result);
        }
    });