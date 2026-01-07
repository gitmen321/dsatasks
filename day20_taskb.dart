void main() {
  var wordA = 'silent';
  var wordB = 'listen';
  print(isAnagrams(wordA, wordB));
}

bool isAnagrams(String awrd, String bwrd) {
  if (awrd.length != bwrd.length) return false;
  var freq = {};

  for (var ch in awrd.toLowerCase().split("")) {
    freq[ch] = (freq[ch] ?? 0) + 1;
  }

  for (var ch in bwrd.toLowerCase().split('')) {
    if (!freq.containsKey(ch)) return false;

    freq[ch] = freq[ch]! - 1;
    if (freq[ch] == 0) {
      freq.remove(ch);
    }
  }
  return freq.isEmpty;
}


