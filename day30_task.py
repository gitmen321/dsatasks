input = "aabbccddef"

def first_non_repeating(wrd):
    freq = {}

    for ch in wrd.lower():
        freq[ch] = freq.get(ch, 0) +1

    for ch in wrd.lower():
        if freq[ch] == 1:
            return ch
    return None


print(first_non_repeating(input))