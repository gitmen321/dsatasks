# this problems returns minimum length of subarray of sum is euqal or greater than target using sliding window

numbers = [1, 2, 1, 0, 1, 4, 0]
target = 4


def min_subarray(nums, targ):
    current_sum = 0
    left = 0
    min_length = len(nums)

    for right in range(len(nums)):
        current_sum += nums[right]

        while current_sum >= targ:
            current_sum -= nums[left]
            min_length = min(min_length, right - left + 1)
            left += 1
    return min_length

print(min_subarray(numbers, target))
