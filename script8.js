// find the second largest number in array

const input = [5, 2, 8, 15, 10, 3];

function secLargest(input) {
    let largest = -Infinity;
    let secLargest = -Infinity;

    for (let num of input) {
        if (num > largest) {
            secLargest = largest;
            largest = num;
        } else if
            (num > secLargest && num <= largest) {
                secLargest = num;
        }
    }
    return secLargest;
}

console.log(secLargest(input));