//program to find reverse of a string

function findReverse(str){
    let reverseString = " ";

    for(let i = str.length -1; i>= 0; i--){
        reverseString += str[i];
    }
    console.log(reverseString);
};

findReverse("I'm bad man");