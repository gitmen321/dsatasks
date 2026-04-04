//find the max count of consutive 1s in an array

function findMaxOne(arr) {
    let count = 0;
    let maxcount = 0;

    for (const num of arr) {
        if (num === 1) {
            count += 1;
            maxcount = Math.max(count, maxcount);
        } else {
            count = 0;
        }
    }
    return maxcount;
}

const nums = [1,1,3,3,4,2,1,1,1,42,1,1];
    console.log(findMaxOne(nums));