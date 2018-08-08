
entry_id = ""
conversion_profile_id = 0
dynamic_conversion_attributes = []
dynamic_conversion_attributes[0] = KalturaConversionAttribute.new()
dynamic_conversion_attributes[0].flavor_params_id = 3

results = client.media_service.convert(entry_id, conversion_profile_id, dynamic_conversion_attributes)
puts results.inspect
