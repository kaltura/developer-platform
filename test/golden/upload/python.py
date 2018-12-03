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

upload_token_id = "abcde"
file_data = open('/path/to/file', 'rb')
resume = False
final_chunk = True
resume_at = -1

result = client.uploadToken.upload(upload_token_id, file_data, resume, final_chunk, resume_at)
print(result)
