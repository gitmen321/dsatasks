void main() {
  print(firstNonRepeatingChar("aaqqppiojjn"));
}

String? firstNonRepeatingChar(String s) {
  var freq = {};
  var word = s.toLowerCase().split('');

  for (var ch in word) {
    freq[ch] = (freq[ch] ?? 0) + 1;
  }
  for (var ch in word) {
    if (freq[ch] == 1) {
      return ch;
    }
  }
  return null;
}

