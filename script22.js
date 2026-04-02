//find smallest word

function findSmallest(str){
    const words = str.split(" ");
    let smallestWord = words[0];

    for(let i =0; i<words.length; i++){
        if (words[i].length < smallestWord.length) {
            smallestWord = words[i];
        }
    }
    console.log(smallestWord);
}
findSmallest("Raaz raza jju");