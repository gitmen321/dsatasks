//find prime number

const findPrime = (numb) => {
    if (numb <= 1) return "Not a Prime";

    for (let i = 2; i <= Math.sqrt(numb); i++) {
        if (numb % i === 0) return "Not a prime"
    }
    return "Prime number";
}
console.log(findPrime(50));