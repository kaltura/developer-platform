
uploadTokenId = "abcde"
fileData = open('/path/to/file', 'rb')
resume = False
finalChunk = True
resumeAt = -1

result = client.uploadToken.upload(uploadTokenId, fileData, resume, finalChunk, resumeAt);
print(result);
