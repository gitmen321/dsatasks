void main() {
  var nums = [1, 3, 4, 5];
  print("Missing number is: ${findMissingnumber(nums)} ");
}

findMissingnumber(List<int> nums) {
  var largeNum = 0;
  var actualSum = 0;
  for (var i = 0; i < nums.length; i++) {
    if (largeNum < nums[i]) {
      largeNum = nums[i];
    }
  }

  int expectedSum = largeNum * (largeNum + 1) ~/ 2;

  for (var value in nums) {
    actualSum += value;
  }

  var missingNum = expectedSum - actualSum;
  return missingNum;
}
