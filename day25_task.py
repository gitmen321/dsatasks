def is_palindrome(s):
    reversed_string = []

    for i in range(len(s)-1, -1, -1):
        reversed_string.append(s[i])
    return reversed_string == [*s]
print(is_palindrome('malayalam'))
        
