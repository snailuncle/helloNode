  private static String genVSign(ConcurrentHashMap<String, String> paramConcurrentHashMap, String paramString)
  {
    StringBuilder localStringBuilder = new StringBuilder();
    TreeMap localTreeMap = new TreeMap();
    if ((paramConcurrentHashMap != null) && (!paramConcurrentHashMap.isEmpty())) {}
    for (int i = 1;; i = 0)
    {
      if (i != 0) {
        localTreeMap.putAll(paramConcurrentHashMap);
      }
      paramConcurrentHashMap = localTreeMap.keySet().iterator();
      while (paramConcurrentHashMap.hasNext())
      {
        String str = (String)paramConcurrentHashMap.next();
        localStringBuilder.append(str).append("=").append((String)localTreeMap.get(str));
      }
    }
    return AntiSpam.getSign(paramString + "#" + Base64.encodeToString(localStringBuilder.toString().getBytes(Charset.forName("UTF-8")), 2));
  }
