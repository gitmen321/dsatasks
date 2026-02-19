numbers = [1,2,3]

def is_duplicated(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

print(is_duplicated(numbers))
    
