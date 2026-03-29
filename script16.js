

function isPalindrome(word) {
    const original = String(word).toLowerCase();

    const reversed = original.split('').reverse().join('');

    if (original !== reversed) return 'Not palindrome';
    return 'palindrome';
}   

console.log(isPalindrome('malsayalam'));