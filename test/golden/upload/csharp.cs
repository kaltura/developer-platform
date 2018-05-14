string uploadTokenId = "";
file fileData = null;
boolean resume = false;
boolean finalChunk = true;
number resumeAt = -1;

OnCompletedHandler<UploadToken> handler = new OnCompletedHandler<UploadToken>(
      (UploadToken result, Exception e) =>
      {
        CodeExample.PrintObject(result);
        done = true;
      });
UploadTokenService.Upload(uploadTokenId, fileData, resume, finalChunk, resumeAt)
   .SetCompletion(handler)
   .Execute(client);