let a = 20;
let b = 10;
let temp;

temp = a; //temp: 20
a = b; //a: 10
b = temp; //b: 20 (a)

console.log("a:", a, "b:", b); //now a= 10, b=20

a = a + b; //a = 30
b = a -b; // b= 10
a = a - b; //a = 20

console.log("a:", a, "b:", b);