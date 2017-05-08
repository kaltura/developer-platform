Channel channel = new Channel();
channel.Description = "foo";
channel.IsActive = true;
channel.AssetTypes = new List<IntegerValue>();
channel.AssetTypes.Add(new IntegerValue());
channel.AssetTypes[0].Value = 0;
channel.AssetTypes[0].Description = "assetValDesc";
channel.AssetTypes.Add(new IntegerValue());
channel.AssetTypes[1].Value = 1;
channel.AssetTypes[1].Description = "assetDesc2";

OnCompletedHandler<Channel> handler = new OnCompletedHandler<Channel>(
      (Channel result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
ChannelService.Add(channel)
   .SetCompletion(handler)
   .Execute(client);