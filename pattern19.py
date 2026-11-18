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
    
    
