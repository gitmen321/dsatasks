void main() {
  print(isPalindrome('parava'));
  // isPalindrome('english');
}

isPalindrome(String s) {
  var word = s.toLowerCase().split('');
  List<String> reversedWord = [];

  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord.add(word[i]);
  }

  for (var i = 0; i < word.length; i++) {
    if (word[i] != reversedWord[i]) {
      return false;
    }
  }

  return true;
}
