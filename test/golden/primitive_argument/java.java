String entryId = "abcde";
int version = 0;

Object result = client.getMediaService().get(entryId, version);
System.out.println(result);