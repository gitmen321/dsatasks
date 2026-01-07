void main() {
  var arr = [1, 3, 4, 9, 5];
  print(findRepeat(arr));
}

findRepeat(List<int> nums) {
  Set numbers = {};
  for (var num in nums) {
    if (numbers.contains(num)) {
      return num;
    }
    numbers.add(num);
  }
  return null;
}
