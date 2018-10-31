from KalturaClient import *
from KalturaClient.Plugins.Core import *

config = KalturaConfiguration()
config.serviceUrl = "https://www.kaltura.com/"
client = KalturaClient(config)
ks = client.session.start(
      "YOUR_KALTURA_SECRET",
      "YOUR_USER_ID",
      KalturaSessionType.ADMIN,
      YOUR_PARTNER_ID)
client.setKs(ks)

uploadTokenId = "abcde"
fileData = open('/path/to/file', 'rb')
resume = False
finalChunk = True
resumeAt = -1

result = client.uploadToken.upload(uploadTokenId, fileData, resume, finalChunk, resumeAt);
print(result);
