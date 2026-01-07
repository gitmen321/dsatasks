numbers = [1,5,7,6,2]
target = 14

def two_sum(nums, targ):
    seen = set()

    for num in nums:
        needed = targ - num

        if needed in seen:
            return True
        seen.add(num)
    return False 

print(two_sum(numbers, target))
