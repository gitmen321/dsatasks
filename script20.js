//find prime number

const isPrime = (number)=> {
    if (number<= 1) return 'not a prime';

    for (let i = 2; i<= Math.sqrt(number); i++){
        if (number % i === 0) {
            return 'not a prime';
        }
    }
    return 'prime number';
}

console.log(isPrime(12));