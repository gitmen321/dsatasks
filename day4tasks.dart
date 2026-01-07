// void main() {
//   String word = "programming";
//   var arr = word.split('');
//   print(charfrequency(arr));
// }

// Map charfrequency(List<String> letters){
//   Map<String, int> freq = {};

//   for (var ch in letters){
//     if(freq.containsKey(ch)) {
//       freq[ch] = freq[ch]! + 1;

//     }else {
//       freq[ch] = 1;
//     }

//   }
//   return freq;

// }

// Count how many vowels are in "communication"

import 'dart:ffi';

void main() {
  var word = "communication";
  print(vowelCount(word));
}

int vowelCount(String wrd) {
  var count = 0;
  var vowels = {'a', 'e', 'i', 'o', 'u'};

  for (var ch in wrd.split('')) {
    if (vowels.contains(ch)) {
      count++;
    }
  }
  return count;
}
