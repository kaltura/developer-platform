let id = "abc";

kaltura.services.appToken.get(id)
.execute(client)
.then(result => {
    console.log(result);
});