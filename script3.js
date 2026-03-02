//group anagrams

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(words) {
    const seen = new Map();

    for (const word of words) {
        const splitWord = word.split("").sort().join("");

        if (!seen.has(splitWord)) {
            seen.set(splitWord, []);
        }

        seen.get(splitWord).push(word);

    }

    return Array.from(seen.values());
}
console.log(groupAnagrams(words));