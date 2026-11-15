n=4
start = 1
for i in range(1, n+1):
    for j in range(n+1, i, -1):
        print(chr(64 + start), end ="")
        start+=1
    start=1
    print()

import string

n=4

alphabet = string.ascii_uppercase

for i in range(n, 0, -1):
    print(alphabet[:i])
