//longest substring without repeating char

const strng = "abcabcdab";

function longestSubString(str) {
    let left = 0;
    const window = new Set(); //using set to store unique value easily
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {

        while (window.has(str[right])) {
            window.delete(str[left]);
            left++;
        }
        window.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);

    }
    return maxLength;
}
console.log(longestSubString(strng));

// Time Complexity: $O(n)$. Although you have a while loop inside a for loop, 
// each character is visited at most twice (once by the right pointer and once by the left pointer).
//  This is often called "amortized $O(n)$."

// Space Complexity: $O(min(m, n))$, 
// where $n$ is the length of the string and $m$ is the size of the character set (e.g., 26 for English alphabet,
//      128 for ASCII).