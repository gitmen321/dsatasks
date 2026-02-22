# max subarray problem
array = [-1, -2, -3]


def max_subarray(nums):
    current_subarray = nums[0]
    max_subarray = nums[0]
    for i in range(1, len(nums)):
        current_subarray = max(nums[i], current_subarray + nums[i])
        max_subarray = max(max_subarray, current_subarray)
    return max_subarray


print("maximum subarray =", max_subarray(array))
