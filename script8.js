// find the second largest number in array

const input = [5, 2, 8, 10, 3];

function seclargest(nums) {
    let largest = -Infinity;
    let second = -Infinity;

    for(let num of nums){
        if (num > largest) {
            second = largest;
            largest = num;
        }
        else if (num >second && num !== largest) {
            second = num;
        }
    }
    return second;
}

console.log(seclargest(input));