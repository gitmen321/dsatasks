//two sum

const nums = [2, 4, 5, 3, 2, 5, 8];
const target = 7;

function findTwoSum(nums, targ) {

    if (!Array.isArray(nums) || nums.length < 2) {
        return [];
    }

    const seen = new Map();
    let needed;

    for (let i = 0; i < nums.length; i++) {
        needed = targ - nums[i];

        if (seen.has(needed)) {
            console.log("Numbers:", nums[i], needed);
            return [i, seen.get(needed)];
        }
        seen.set(nums[i], i);
    }
    return [];
}

console.log(findTwoSum(nums, target));

// this is O(n) time complexity, because we're iterating one time through this array.