require 'kaltura'
include Kaltura

config = KalturaConfiguration.new()
config.service_url = 'https://www.kaltura.com'
client = KalturaClient.new(config);
client.ks = client.session_service.start(
    "YOUR_KALTURA_SECRET",
    "YOUR_USER_ID",
    Kaltura::KalturaSessionType::ADMIN,
    YOUR_PARTNER_ID)


upload_token_id = "abcde"
file_data = File.open("/path/to/file")
resume = false
final_chunk = true
resume_at = -1

results = client.upload_token_service.upload(upload_token_id, file_data, resume, final_chunk, resume_at)
puts results.inspect
