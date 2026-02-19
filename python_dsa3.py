#two sum, optimized with hash map

numbers = [2,7,11,15]
target = 9

def sumofTwo(nums, targ):
    seen = {}
    for i, num in enumerate(nums):
        needed = targ - num

        if needed in seen:
            return [seen[needed], i]
        seen[num] = i


print(sumofTwo(numbers, target))