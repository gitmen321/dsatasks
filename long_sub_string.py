# longest substring without repeating character

string = "abcabcdeab"


def long_substring(s):
    left = 0
    max_length = 0
    seen = set()

    for right in range(len(s)):

        while s[right] in seen:
            seen.remove(s[left])
            left += 1
        seen.add(s[right])
        max_length = max(max_length, right - left + 1)
    return seen, max_length


print(long_substring(s=string))
