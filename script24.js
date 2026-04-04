//return fib sequence upto given number

function fibSeq(num) {
    if (num <= 0) return [];
    if (num === 1) return [0];

    const sequence = [0, 1];
    let current = 1;
    let previous = 0;
    let next;

    for (let i = 2; i<num; i++){
        next = current + previous;
        previous = current;
        current = next;
        sequence.push(next);
    }
    return sequence;
}

console.log(fibSeq(10));