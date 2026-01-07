// Find the first duplicate number in a list

void main() {
  print("firstDuplicate number: ${firstDuplicate([3,5,2,8,4])}");
}

firstDuplicate(List<int> arr) {
  var dupMap = {};

  for (var nums in arr) {
    dupMap[nums] = (dupMap[nums] ?? 0) + 1;

    if (dupMap[nums] == 2) {
      return nums;
    }
  }
  return null;
}
