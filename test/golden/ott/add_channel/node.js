let channel = new kaltura.objects.Channel();
channel.description = "foo";
channel.isActive = true;

kaltura.services.channel.add(channel)
.execute(client)
.then(result => {
    console.log(result);
});