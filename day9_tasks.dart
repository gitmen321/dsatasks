// Count frequency of a number
void main() {
  var numbers = [1, 2, 3, 2, 4, 2];
  int target = 2;

  int freqNum = findFreqNum(numbers, target);

  print("count of repeated number: $freqNum");
}

findFreqNum(List<int> nums, targ) {
  int count = 0;

  for (var value in nums) {
    if (value == targ) {
      count++;
    }
  }
  return count;
}
