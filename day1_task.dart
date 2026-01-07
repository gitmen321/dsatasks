//Today’s concept: Arrays & finding maximum value

void main() {
  print(findMax(nums));
}

var nums = [4, 2, 8, 1, 9, 6];


int findMax(num) {
  var largest = num[0];

  for (var i = 1; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }

  return largest;
}
