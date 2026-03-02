#fixed size sliding window
numbers = [2, 4, 3, 4, 1, 1]
k = 3


def max_sub_array(nums, k):
    current_sum = sum(nums[:k])
    max_sum = current_sum

    for i in range(k, len(nums)):
        current_sum = current_sum - nums[i- k] + nums[i]
        max_sum = max(current_sum, max_sum)
    return max_sum

print(max_sub_array(numbers, k))



