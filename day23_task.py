
nums = [1, 3, 5, 7]
target = 8

def isExisted (nums, targ):
    
    for i in range(len(nums)):

        if nums[i] == targ :
            return True
        
    return False



print('IsExisted:', isExisted(nums, target))

