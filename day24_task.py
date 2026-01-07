numbers = [1]

def is_Sorted(nums):
    
    if len(nums)<= 1:
        return True
    
    currentNum = nums[0]
    isAscending = True
    isDescending = True
    
    
    for i  in range(1, len(nums)):
        if currentNum >= nums[i]:
            isAscending = False
        if currentNum <= nums[i]:
            isDescending = False

        currentNum = nums[i]
    if isAscending or isDescending:
        return True
    return False
        
print("Is this numbers sorted:", is_Sorted(numbers))
