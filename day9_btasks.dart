// Reverse a List (WITHOUT using .reversed)
void main() {
  var numbers = [1, 2, 3, 4];
  print("RiversedList: ${reverseTheList(numbers)}");
}

reverseTheList(List<int> nums) {
  var newList = [];

  for (var i = nums.length - 1; i >= 0; i--) {
    newList.add(nums[i]);
  }

  return newList;
}
