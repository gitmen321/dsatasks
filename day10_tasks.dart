// Remove duplicates from the list
void main() {
  var arrNums = [1, 2, 2, 3, 4, 4, 5];
  var newNums = removeDup(arrNums);
  print("Updated list of numbers: $newNums");
}

removeDup(List<int> nums) {
  var newArr = [];

  for (var value in nums) {
    if (!newArr.contains(value)) {
      newArr.add(value);
    }
  }
  return newArr;
}
