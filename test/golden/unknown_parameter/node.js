let accessControl = new kaltura.objects.AccessControl();

kaltura.services.accessControl.add(accessControl)
.execute(client)
.then(result => {
    console.log(result);
});