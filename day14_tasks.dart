// Check if a list is strictly increasing

void main() {
  var numbers = [1, 2, 3, 5, 4, 33, 66];
  var isincreasingOrDecreasing;
  print(isIncreasing(numbers, isincreasingOrDecreasing));
}

isIncreasing(List<int> nums, isIncreas) {
  isIncreas = "Its increasing";
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      return isIncreas = "It is Decreasing";
    }
  }
  return isIncreas;
}
