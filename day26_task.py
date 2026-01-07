input = "This is a test this is"

def count_freq(s):
    freq = {}
    word = s.lower().split()
    for ch in word:
        freq[ch] = freq.get(ch, 0) +1
    return freq

print(count_freq(input))