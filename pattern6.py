
recorded = ""
n=5
for i in range(n, 0, -1):
    for j in range(i):
        print(j+1, end ="")
    print()


sequence = "".join(str(x) for x in range(1, n+1))
print(sequence)

for i in range(n, 0, -1):
    print(sequence[:i])

