
access_control = KalturaAccessControl.new()

results = client.access_control_service.add(access_control)
puts results.inspect
