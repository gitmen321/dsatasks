//find the first non repeating element
void main() {
  var arr = [1, 2, 3, 4, 4, 3, 5, 2, 1];
  print(nonRepeating(arr));
}

int? nonRepeating(List<int> nums) {
  var freq = {};

  for (var num in nums) {
    freq[num] = (freq[num] ?? 0) + 1;
  }

  for (var num in nums) {
    if (freq[num] == 1) {
      return num;
    }
  }

  return null;
}
