//to find longest word

function findLongest(sentence){
    let wordsArray = sentence.split(' ');
    let longestWord = ' ';

    for(let i = 0; i<wordsArray.length; i++){
        if(wordsArray[i].length > longestWord.length) {
            longestWord = wordsArray[i];
        }
    }
        return longestWord;
}

console.log(findLongest("I'm a best backend engineeeer here"));