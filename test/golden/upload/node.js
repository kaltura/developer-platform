const kaltura = require('kaltura-client');
const config = new kaltura.Configuration();
config.serviceUrl = 'https://www.kaltura.com';
const client = new kaltura.Client(config);
kaltura.services.session.start(
    "YOUR_KALTURA_SECRET",
    "YOUR_USER_ID",
    kaltura.enums.SessionType.ADMIN,
    YOUR_PARTNER_ID)
.completion((success, ks) => {
    if (!success) throw new Error(ks.message);
    client.setKs(ks);
    let uploadTokenId = "abcde";
    let fileData = '/path/to/file';
    let resume = false;
    let finalChunk = true;
    let resumeAt = -1;

    kaltura.services.uploadToken.upload(uploadTokenId, fileData, resume, finalChunk, resumeAt)
    .execute(client)
    .then(result => {
        console.log(result);
    });
})
.execute(client);