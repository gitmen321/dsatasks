//fibinocci series:

function fib(n){
    if (n===0) return 0;
    if(n<= 2) return 1;

    let current = 1;
    let previous = 0;
    let next;

    for(let i = 2; i<=n; i++){
        next = previous + current;
        previous = current;
        current = next;
    }
    return next;
}

console.log(fib(5));
