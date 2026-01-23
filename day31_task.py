nums = [2,5,6,9,5,8]
target = 8

def two_sum_index(nums, targ):
    seen = {}
    
    for i, num in enumerate(nums):
        needed = targ - num
        
        if needed in seen:
            return [seen[needed], i]
        seen[num] = i
    return None

print(two_sum_index(nums, target))
