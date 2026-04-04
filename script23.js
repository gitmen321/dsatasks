// //Write a function sumOfThirds(arr), which takes an 
// array arr as an argument. This function should return a sum 
// of every third number in the array, starting from the first one

function sumOfThirds(arr){
    let sum = 0;

    for(let i = 0; i< arr.length; i+=3){
        sum+=arr[i];
    }
    return sum; 
}

const array = [23,12,25,33,85,33,74,33];
console.log(sumOfThirds(array));
