require 'kaltura'
include Kaltura

config = KalturaConfiguration.new()
config.service_url = 'https://www.kaltura.com'
client = KalturaClient.new(config);
client.ks = client.session_service.start(
    "81b50515b869628777617f454cdca7f5",
    "bobby.brennan@gmail.com",
    Kaltura::KalturaSessionType::USER,
    2018872)


