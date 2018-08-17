import time
import datetime

t = time.time()

# print (t)                       #原始时间数据
# print (int(t))                  #秒级时间戳
print (int(round(t * 1000)))    #毫秒级时间戳

nowTime = lambda:int(round(t * 1000))
print (nowTime());              #毫秒级时间戳，基于lambda


# 1534488593.5722308
# 1534488593
# 1534488593572
# 1534488593572
# 1534486483022
# 1518325131
  1534486483
