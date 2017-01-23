string entryId = "abcde";
int version = 0;

Object result = client.MediaService.Get(entryId, version);
Console.WriteLine(result);