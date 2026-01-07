input = [1, 2, 2, 3, 4, 4, 5, 9]

def largest_unique(nums):
    freq = {}
    uniqueNums = []
    largest = nums[0]

    for num in nums:
        freq[num] = freq.get(num, 0) +1
        if freq[num] == 1:
            uniqueNums.append(num)
    for i in range(1, len(uniqueNums)):

        if uniqueNums[i] > largest:
            largest = uniqueNums[i]
    return largest

print(largest_unique(input))


        


        

    
