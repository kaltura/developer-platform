
loginId = ""
password = "*************"
partnerId = 0
expiry = 86400
privileges = "*"
otp = ""

result = client.user.loginByLoginId(loginId, password, partnerId, expiry, privileges, otp);
print(result);
