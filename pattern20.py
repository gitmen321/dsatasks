# *        *
# **      **
# ***    ***
# ****  ****
# **********
# ****  ****
# ***    ***
# **      **
# *        *

n = 5


space = 2*n - 2

for i in range(1, 2*n):

    stars = i if i < n else  2*n - i

    for j in range(stars):
        print("*", end = "")
  
    for j in range(space):
        print(" ", end="")
        

    
    for j in range(stars):
        print("*", end = "")


  
    space += -2 if i< n else 2
    print()
