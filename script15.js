//return only even numbers
const numbers = [42, 4, 5, 7, 2, 8, 6, 4, 7, 4, 33, 8, 311, 33];

function evenNums(nums) {
    const evenNums = [];
    for (const num of nums) {
        if ((num & 1) == 0) {
            evenNums.push(num);
        }
    }
    return evenNums;
}

console.log(evenNums(numbers));