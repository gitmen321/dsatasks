// Find the SECOND Largest Number (WITHOUT sorting)

void main() {
  const nums = [10, 5, 20, 8, 15];
  print("Second Largest Number is ${secondLargestNum(nums)}");
}



secondLargestNum(List<int> nums){
  int largest = nums[0];
  int second = -9999;

  for (var i = 1; i < nums.length; i++) {
    int current = nums[i];

    if (current > largest) {
      second = largest;
      largest = current;
      
    }else if(current< largest && current > second){
      second = current;
    }
  }
  return second;
}
