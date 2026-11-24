arr = [2,4,3,2, 4, 5,2, 5, 6]

def findCount(arr, n):
    count = 0

    for num in arr:
        if num == n:
            count+=1
    return count

result = findCount(arr, 2)

print(result)


def findCountVersion2(arr, n):
    freq = {}

    for num in arr:
        freq[num] = freq.get(num, 0 ) +1
    return freq[n]

result1 = findCountVersion2(arr, 2)
print(result1)