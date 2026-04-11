let a = 20;
let b = 10;
let temp;

temp = a;
a = b;
b = temp;
console.log("a:", a, "b:", b); //now a= 10, b=20

a = a + b;
b = a - b;
a = a - b;

console.log("a:", a, "b:", b);

const namee = "RAAZ";
let reversedName = '';

for (let i = namee.length - 1; i >= 0; i--) {
    reversedName += namee[i];
}
console.log(reversedName);