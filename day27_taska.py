nums = [2, 7, 11, 15]
target = 111

def two_sum(nums, targ):
    seen = {}
    
    for num in nums:
        needed = targ - num
        if needed in seen:
            return True
        seen[num] = True
    return False

print(two_sum(nums, target))
