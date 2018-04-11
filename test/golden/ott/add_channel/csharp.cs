Channel channel = new Channel();
channel.Description = "foo";
channel.IsActive = true;

OnCompletedHandler<Channel> handler = new OnCompletedHandler<Channel>(
      (Channel result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
ChannelService.Add(channel)
   .SetCompletion(handler)
   .Execute(client);