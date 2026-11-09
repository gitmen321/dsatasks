

# def pattern5(n):
#     for i in range(n, 0, -1):
#         print(i * "*")


# pattern5(4)

def pattern5(n):
    for i in range(n):
        for j in range(n-i+1):
            print(i * "*", end = "")
        print()

pattern5(4)
