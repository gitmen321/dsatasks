


word = 'aabbcdcdoo'

def non_repeating(wrd):
    freq = {}

    for ch in wrd:
        freq[ch] = freq.get(ch, 0) + 1
        
    for ch in wrd:
        if freq[ch] == 1:
            return ch
    return None

print('nonRepeated character:', non_repeating(word))