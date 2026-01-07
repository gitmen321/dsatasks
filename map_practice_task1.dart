// Count how many times each number appears
void main() {
  var nums = [1, 2, 2, 3, 3, 3];
  print(countNumber(nums));
}

countNumber(List<int> nums) {
  var freq = {};

  for (var value in nums) {
    freq[value] = (freq[value] ?? 0) + 1;
  }
  return freq;
}
