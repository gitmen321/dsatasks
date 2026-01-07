// Task — Sum of array without using built-in functions

// Given:

// [5, 2, 7, 1]

// Write a function:

// findSum(nums)



// void main() {
//   var arr = [5, 2, 7, 1]; // for loop
//   int sum = findSum(arr);
//   print("Sum: $sum");

//   var numbers = [2,5,3,7,32,10];// for in loop
//   int sunNums = sumNums(numbers);
//   print("Sum: $sunNums");

//   var integers = [3,6,4,7,90,23];
//   int sumInteger = sumInt(integers);
//   print("Sum of integers: $sumInteger");
// }

int findSum(List<int> nums) {
  int sum = 0;

  for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

// using for in loop

int sumNums(List<int> nums) {
  int sum = 0;
  for (var value in nums) {
    sum += value;
  }
  return sum;
}

int sumInt(List<int> nums) {
  int sum = 0;
  int i = 0;

  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

// 1. Multiply all numbers in the array

// Input: [2, 3, 4]
// Output: 24

// void main() {
//   var arr = [2, 3, 4];
//   int multiArr = multArr(arr);
//   print("Multiply of this array: $multiArr");
// }

int multArr(List<int> nums) {
  int result = 1;

  for (var i in nums) {
    result = result * i;
  }
  return result;
}

//Task 2: Find largest number in [5, 2, 7, 1]

// void main(){
//   var arr = [5,2,7,1 ];
//   int larg = largeNum(arr);
//   print("Largest number: $larg ");
// }

int largeNum(List<int> nums) {
  int result = 0;

  for (var i = 0; i < nums.length; i++) {
    if (result < nums[i]) {
      result = nums[i];
    }
  }

  return result;
}

// Count how many numbers are even in:

void main() {
  var arr = [5, 2, 7, 1, 8, 10];
  int evenSum = evenNums(arr);
  print("Total even numbers: $evenSum ");
}

int evenNums(List<int> nums) {
  int result = 0;
  
  for( int i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 0){
      result ++;
    }
  }

  return result;
}
