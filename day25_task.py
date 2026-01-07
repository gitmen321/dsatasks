
def isPalindrome(s):
    word = list(s.lower())
    reversed = []

    for i in range(len(word) -1, -1, -1):
        reversed.append(word[i])

    return word == reversed

print(isPalindrome('kjfd'))

