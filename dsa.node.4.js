//longest substring without repeating char optimized using map

const strng = "abcdabcabcde";

function longSubString(str) {
    let left = 0;
    let longestString = 0;
    const seen = new Map();

    for (let right = 0; right < str.length; right++) {
        if (seen.has(str[right]) && seen.get(str[right]) >= left) {
            left = seen.get(str[right]) + 1;
        }
        seen.set(str[right], right);
        longestString = Math.max(longestString, right - left + 1);
    }
    return longestString;

}

console.log(longSubString(strng));

//seen = { a: 0, b: 1; c:2, d: 3 }  long string = 4   left= 0
//iteration: a       left = 1    {a: 0, b: 1; c:2, d: 3, a: 4}  longstring: 4