numbers = [22,34,35,53,2,45,5]
nmbrs = [23, 354, 562334,5, 54]

for i in range(len(numbers) ):
    print(i, numbers[i])

    # OR, 

for i, num in enumerate(nmbrs):
    print(i, num)

    # it become necessory  when we need  index + value, position based desicions

