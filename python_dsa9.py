numbers = [0, 0, 1, 0, 3, 12]


def move_zeros(nums):
    write = 0

    for read in range(len(nums)):
        if nums[read] != 0:
            nums[write] = nums[read]
            write += 1
    for i in range(write, len(nums)):
        nums[i] = 0
    return nums


print(move_zeros(numbers))
