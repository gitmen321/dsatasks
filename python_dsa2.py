nums = [2, 7, 11, 15]
target = 9

def sumOfTwo(nums, targ):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == targ:
                return i, j
    


print(sumOfTwo(nums, target))
            
        