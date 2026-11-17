#     A
#    ABA
#   ABCBA
#  ABCDCBA
# 


n = 4

for i in range(n):
    for j in range(0, n-i-1):
        print(" ", end= "")

    ch = 'A'
    breakPoint = (2*i+1) // 2

    for j in range(0, 2*i+1):
        print(ch, end ="")

        if j< breakPoint:
             ch = chr(ord(ch) + 1)  
        else:
            ch = chr(ord(ch) - 1)  
    print()