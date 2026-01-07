// Find the SMALLEST number in a list
void main() {
  var numbers = [10, 5, 20, 8, 15];
  var smallNumber = findSmallNum(numbers);
  print("Smallest number is: $smallNumber");
}

findSmallNum(List<int> nums) {
  int smallNum = nums[0];

  for (var i = 1; i < nums.length; i++) {
    int currentNum = nums[i];

    if (currentNum < smallNum) {
      smallNum = currentNum;
    }
  }
  return smallNum;
}

