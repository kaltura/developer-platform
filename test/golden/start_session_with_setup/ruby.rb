require 'kaltura'
include Kaltura

config = KalturaConfiguration.new()
config.service_url = 'https://www.kaltura.com'
client = KalturaClient.new(config);
client.ks = client.session_service.start(
    "secretsauce",
    "YOUR_USER_ID",
    Kaltura::KalturaSessionType::ADMIN,
    1234)


