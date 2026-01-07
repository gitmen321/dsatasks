void main() {
  var numbers = [7, 9, 5, 6, 3, 2];
  print(findMaxDiff(numbers));
}

findMaxDiff(List<int> nums) {
  var minNum = nums[0];
  var maxDiff = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    } else {
      var difference = nums[i] - minNum;
      difference > maxDiff ? maxDiff = difference : maxDiff;
    }
  }
  return maxDiff;
}


