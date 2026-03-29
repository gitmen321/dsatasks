
function isPalindrome(str) {
    const original = String(str).toLowerCase();
    const reversed = original.split('').reverse().join('');

    if (original !== reversed) return 'Not palindrome';
    return 'palindrome';
}

console.log(isPalindrome('malaweealam'));

function isPalindromee(str) {
    const word = String(str).toLowerCase();

    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return 'Not Palindrome'

        left++;
        right--;
    }
    return 'Palindrome';
}

console.log('RazaR:', isPalindromee('RasszaR'));