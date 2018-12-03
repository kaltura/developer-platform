
entry_id = ""
conversion_profile_id = 0
dynamic_conversion_attributes = []
dynamic_conversion_attributes[0] = KalturaConversionAttribute()
dynamic_conversion_attributes[0].flavorParamsId = 3

result = client.media.convert(entry_id, conversion_profile_id, dynamic_conversion_attributes)
print(result)
