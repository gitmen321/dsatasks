// count vowels in a String

void main() {
  String word = "communication";
  print("Count of vowels: ${findVowelCount(word)}");
}

findVowelCount(String word) {
  var freq = {};
  var vowels = {'a', 'e', 'i', 'o', 'u'};

  for (var ch in word.toLowerCase().split('')) {
    if (vowels.contains(ch)) {
      freq[ch] = (freq[ch] ?? 0) + 1;
    }
  }
  return freq;
}
