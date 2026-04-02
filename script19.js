//find maximum number in array

const numbers = [2,5,2,55,23,10];

function findMax(nums) {
    let maxNum = 0;

    for(const num of nums){
        if(num > maxNum) maxNum = num;
    }
    return maxNum;
}

console.log(findMax(numbers));