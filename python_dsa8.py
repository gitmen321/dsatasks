numbers = [2, 3, 4, 5, 5, 6, 6]


def remove_duplicates(nums):
    if not nums:
        return 0
    
    write = 1

    for read in range(1, len(nums)):
        if nums[read] != nums[write - 1]:
            nums[write] = nums[read]
            write += 1
    return write


print(remove_duplicates(numbers))
