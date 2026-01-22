inputa = "abc"
inputb = "cba"

def is_anagram(a,b):

    if len(a) != len(b):
        return False
    
    freq = {}
    freqb = {}

    for ch in a:
        freq[ch] = freq.get(ch, 0) +1

    for ch in b:
        freqb[ch] = freqb.get(ch, 0) +1

    return freqb == freq

print(is_anagram(inputa, inputb))