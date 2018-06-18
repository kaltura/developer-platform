let entryId = "abcde";
let version = -1;

kaltura.services.media.get(entryId, version)
.execute(client)
.then(result => {
    console.log(result);
});