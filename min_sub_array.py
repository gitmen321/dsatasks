# this problems returns minimum length of subarray of sum is euqal or greater than target using sliding window

numbers = [1, 2]
target = 3

def min_sub_array(nums, targ):
    current_sum = 0
    left = 0
    min_sum = float('inf')

    for right in range(len(nums)):
        current_sum += nums[right]

        while current_sum >= targ:
            current_sum -= nums[left]
            min_sum = min(min_sum, right - left + 1)
            left += 1
    if min_sum ==float('inf'):
      return  0

    else:
        return min_sum


print(min_sub_array(numbers, target))

