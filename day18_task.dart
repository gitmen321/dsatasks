void main() {
  var numbers = [5,4,3,4,1];
  var isSortedValue = isSorted(numbers);
  print(isSortedValue);
}

isSorted(List<int> nums) {
  bool isIncreasing = true;
  bool isDecreasing = true;

  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      isDecreasing = false;
    }
    if (nums[i] > nums[i+1]) {
      isIncreasing = false;
    }
  }
  if (isIncreasing) return "Increasing";
  if (isDecreasing) return "Decreasing";
  return "Not sorted";
}
