void main() {
  String word = "aabbcdde";
  print(firstNonRepeating(word));
}

String? firstNonRepeating(String wrd) {
  Map<String, int> freq = {};
  

  for(var ch in wrd.split('')){
    freq[ch] = (freq[ch] ?? 0)+1;
  }
  for (var ch in wrd.split('')) {
    if (freq[ch] == 1) {
      return ch;
    }
    
  }
return null;

}
