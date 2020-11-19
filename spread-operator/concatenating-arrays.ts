/*
This function takes in an array of numbers as input and uses the spread operator
to return an array with the original input first and the duplicated array second ie (input : 1,2,3,4 => output: 1,2,3,4,1,2,3,4
 */
let arr: number[] = [1,2,3,4];

// Take number array as input and return combined array
const dupArr = (arr: number[]) => [...arr, ...arr];

console.log(dupArr(arr));
