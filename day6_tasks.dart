// Count Unique Values in a List

// Write a function in Dart:

void main() {
  var nums = [1, 2, 2, 3, 4, 4, 4, 5];
  var uniqueVal = uniqueNum(nums);
  print("Unique value: $uniqueVal");
}

uniqueNum(List<int> nums) {
  Map<int, bool> uniqueMap = {};

  for (var number in nums) {
    uniqueMap[number] = true;
  }

  return uniqueMap.length;
}
