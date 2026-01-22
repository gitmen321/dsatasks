input = "abcabcdbb"

def long_substring(s):
    left = 0
    long_string = 0
    seen = {}

    for right, ch in enumerate(s):

        if ch in seen and seen[ch] >= left:
            left = seen[ch] + 1
        
        seen[ch] = right

        long_string = max(long_string, right - left + 1)
    return long_string

print(long_substring(input))



