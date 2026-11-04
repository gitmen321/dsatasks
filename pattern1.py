

# def firstAns(n):

#     for i in range(n):
#         print(n * "*")

# def secondAns(n):
#     for i in range(n):
#         for j in range(n):
#             print("*", end ="")
#         print()
        

# # firstAns(n=6)
# secondAns(n=3)


# def numgram(n):
#     for i in range(n+1):
#         for j in range( i):
#             print(j+1, end = "")
#         print()

# numgram(n=5)


def numgram1(n):
    currentNum = ""

    for i in range(1, n+1):
        currentNum += str(i)
        print(currentNum)

numgram1(5)
    