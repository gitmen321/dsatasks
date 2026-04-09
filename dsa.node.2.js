//valid paranthesis

const strng = "({[]})";

function validParantheses(str) {
    const paranthesisMap = {
        ']': '[',
        ')': '(',
        '}': '{'
    };
    const stack = [];

    for (const char of str) {
        if (paranthesisMap[char]) {
            const topValue = stack.pop();
            if (topValue !== paranthesisMap[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

console.log(validParantheses(strng));

// Time Complexity: $O(n)$ where $n$ is the length of the string. We visit each character exactly once.
// Space Complexity: $O(n)$ in the worst case (e.g., the string is all openers ((((((). We store them all in the stack.