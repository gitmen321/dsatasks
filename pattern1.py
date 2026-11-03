

def firstAns(n):

    for i in range(n):
        print(n * "*")

def secondAns(n):
    for i in range(n):
        for j in range(n):
            print("*", end ="")
        print()
        

# firstAns(n=6)
secondAns(n=3)