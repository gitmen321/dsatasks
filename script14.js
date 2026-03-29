//fibinocci series:

function fib(n) {
    if (n == 0) return 0;
    if (n <= 2) return 1;

    let prev = 0;
    let curr = 1;
    let next;


    for (let i = 2; i <= n; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next;
}
console.log(fib(5));