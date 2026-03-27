// remove duplicate numbers:

const nums = [2, 3, 4, 2, 4, 5, 6, 2, 6, 7, 6];

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

console.log(removeDuplicates(nums));

function removeDupllicates(arr) {
    let uniqueArr = [];

    for (let i = 0;  i<= arr.length - 1; i++){
        if (uniqueArr.indexOf(arr[i]) == -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
};
console.log(removeDupllicates(nums));