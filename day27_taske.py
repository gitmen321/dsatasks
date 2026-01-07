numbers = [1,2,2,3,1]

def remmove_dups(nums):
    uniqueset = set(nums)
    uniquelist = []
    for num in uniqueset:
        uniquelist.append(num)
    return uniquelist

print(remmove_dups(numbers))

    