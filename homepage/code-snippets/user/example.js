let user = new kaltura.objects.User();
user.email = "you@email.com";
user.id = "username";

kaltura.services.user.add(user)
.execute(client)
.then(result => {
    console.log(result);
});
