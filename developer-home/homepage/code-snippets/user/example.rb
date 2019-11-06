user = KalturaUser.new()
user.email = "you@email.com"
user.id = "username"

results = client.user_service.add(user)
puts results.inspect

