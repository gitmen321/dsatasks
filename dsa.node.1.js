//two sum

const nums = [2, 4, 5, 3, 2, 5, 8];
const target = 7;

function findTwoSum(nums, targ) {
    if (!Array.isArray(nums) || nums.length < 2) return [];
    let seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        let needed = targ - nums[i];

        if (seen.has(needed)) {
            return [seen.get(needed), i];
        }
        seen.set(nums[i], i);
    }
    return [];
}

console.log(findTwoSum(nums, target));

// this is O(n) time complexity, because we're iterating one time through this array.