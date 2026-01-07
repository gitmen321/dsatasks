void main() {
  var numbers = [1, 2, 4, 5, 6, 2, 3];
  print(hasDuplicates(numbers));
}

bool hasDuplicates(List<int> nums) {
  Set seen = {};

  for (var num in nums) {
    if (seen.contains(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
