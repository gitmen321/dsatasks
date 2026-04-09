//longest substring without repeating char optimized using map

const strng = "aabbccabcdacdbe";

function longSubString(str) {
    let left = 0;
    let longString = 0;
    const seen = new Map();

    for (let right = 0; right < str.length; right++) {

        if (seen.has(str[right]) && seen.get(str[right]) >= left) {
            left = seen.get(str[right]) + 1;
        }
        seen.set(str[right], right);
        longString = Math.max(longString, right - left + 1);
    }
    return longString;
}

console.log(longSubString(strng));