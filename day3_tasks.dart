// 🧩 DSA Task — Count how many numbers are greater than 10

void main() {
  var arr = [3, 15, 9, 25, 7, 42];
  int greaterNumber = countGreaterNums(arr);
  print("Greater Nums are: $greaterNumber");
}

int countGreaterNums(List<int> nums) {
  int result = 0;
  for (int i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
      result++;
    }
  }
  return result;
}
