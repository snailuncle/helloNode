

importClass(android.util.Base64)


importClass(java.nio.charset.Charset)
// importClass(java.lang.String)









paramString2333="1534377981538518";
localStringBuilder2333="behavior_type=1pn=0rn=10uid=x53d93033613a";


new_str = new java.lang.String(localStringBuilder2333);


new_str =new_str.getBytes(Charset.forName("UTF-8"))




new_str2=Base64.encodeToString(new_str, 2)



className2333="AntiSpam"
str2333=paramString2333+"#"+"YmVoYXZpb3JfdHlwZT0xcG49MHJuPTEwdWlkPXg1M2Q5MzAzMzYxM2E="




log(new_str)
log(new_str2)
log(str23333)
