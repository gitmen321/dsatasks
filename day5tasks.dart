
import 'dart:math';

void main() {
  var numbers = [2, 3, 4, 5, 6];
  var primnums = [];
  print(getPrime(numbers, primnums));
}

getPrime(List<int> numbers, prnms) {
  int count = 0;
  for (var i in numbers) {
    if (isPrime(i)) {
      count++;
      prnms.add(i);
    }
  }
  return count;
  
}

bool isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
