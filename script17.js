//find factoral of a number

function factorial(num) {
    if (num < 0) return -1;
    if (num === 0 || num === 1) return 1;

    return num * factorial(num - 1);
}

console.log(`factorial: ${factorial(5)}`);

function fctrl(num) {
    if (num < 0) return -1;
    if (num === 0 || num === 1) return 1;

    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(`factorial: ${fctrl(5)}`);
