

# def pattern4(n):
#     for i in range(1, n+1):
#         for j in range(i):
#             print(i, end="")
#         print()


# pattern4(n=5)

def pattern4(n):
    

    for i in range(1, n + 1):
        print(str(i)*i)



pattern4(5)
a=6
print("\n".join(str(i)* i for i in range(1, a+1)))

