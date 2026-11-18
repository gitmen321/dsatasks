# **********
# ****  ****
# ***    ***
# **      **
# *        *
# *        *
# **      **
# ***    ***
# ****  ****
# **********


n = 5
spaces = 0 

for i in range(n):

    for j in range(0, n-i):
        print("*", end = "")
    

    for j in range(0, spaces):
        print(" ", end = "")

    for j in range(0, n-i):
        print("*", end = "")
    spaces+=2
    print()

spaces = (2*n -2)

for i in range(n):

    for j in range(0, i+1):
        print("*", end = "")
    
    for j in range(0, spaces):
        print(" ", end ="")
    
    for j in range(0, i+1):
        print("*", end = "")
    
    spaces -=2
    print("")
    
    

for i in range(2*n):

    row = i if  i < n else (2 * n - 1 - i)

    stars = "*" *(n - row)
    space = " " *(2 * row)

    print(stars+space+stars)