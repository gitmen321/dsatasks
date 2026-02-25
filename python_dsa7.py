# variable sliding window


s = "abcabcd"
def length_of_longest_substring(s):
    left = 0
    window = set()
    max_length = 0

    for right in range(len(s)):

        while s[right] in window:
            window.remove(s[left])
            left += 1

        window.add(s[right])
        max_length = max(max_length, right - left + 1)
    return max_length


print(length_of_longest_substring(s))

