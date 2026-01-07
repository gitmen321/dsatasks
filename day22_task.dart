void main() {
  var arr = [1, 2, 3,2,4,6,2];
  int target = 4;
  print(findTwoSum(arr, target));
}

bool? findTwoSum(List<int> nums, targ) {
  Set seen = {};

  for (int i = 0; i < nums.length; i++) {
    var currentNum = nums[i];
    var needed = targ - currentNum;

    if (seen.contains(needed)) {
      return true;
    }
    seen.add(currentNum);
  }
  return false;
}
