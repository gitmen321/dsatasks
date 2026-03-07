//count how many times each char appears

const input = "banana";

function countFreq(word) {
    const freq = new Map();

    for (const wrd of word) {
        freq[wrd] = (freq[wrd] ?? 0) +1;
    }
    return freq;
}

console.log(countFreq(input));