s = "abcdefghs"
t = "shgfedcba"

def is_anagrams(a,b):
    freq = {}
    freqb = {}
    aword = [*a.lower()]
    bword = [*b.lower()]
    
    if len(aword) != len(bword):
        return False
    
    for ch in aword:
        freq[ch] = freq.get(ch, 0)+1

    for ch in bword:
        freqb[ch] = freqb.get(ch, 0)+1

    return freq == freqb

print(is_anagrams(s, t))