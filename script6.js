//reverse a string using js nuiltin method and also while iteration

const inputString = "backend";

function reverseString(str) {
    const revString = str.split("").reverse().join("");
    return console.log(revString);
}

function reverseStringIteration(str) {
    let result = "";

    for (let i = str.length - 1; i>= 0; i--){
        result += str[i];
    }
    return console.log(result);
}

reverseStringIteration(inputString);
reverseString(inputString);