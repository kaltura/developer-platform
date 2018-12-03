
login_id = ""
password = "*************"
partner_id = 0
expiry = 86400
privileges = "*"
otp = ""

result = client.user.loginByLoginId(login_id, password, partner_id, expiry, privileges, otp)
print(result)
