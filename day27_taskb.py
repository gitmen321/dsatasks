word = "abbcdc"

def first_repeat(s):
    wrd = [*s.lower()]
    freq = {}

    for ch in wrd:
        freq[ch] = freq.get(ch, 0)+1
        if freq[ch] == 2:
            return ch
    return None
    
print(first_repeat(word))