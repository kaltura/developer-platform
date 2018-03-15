String entryId = "abcde";
int version = -1;

Object result = client.getMediaService().get(entryId, version);
System.out.println(result);