require 'kaltura'
include Kaltura

config = KalturaConfiguration.new()
config.service_url = 'https://www.kaltura.com'
client = KalturaClient.new(config);

login_id = "foobar"
password = "*************"
partner_id = 0
expiry = 86400
privileges = "*"
otp = ""

results = client.user_service.login_by_login_id(login_id, password, partner_id, expiry, privileges, otp)
puts results.inspect
