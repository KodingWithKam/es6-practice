/*
This example uses the spread operator to insert another array into the
initialized array when you construct an array using the literal form
 */

let startingChars: string[] = ['Tom', 'Bob'];
let newArr: string[] = [...startingChars, 'Kam', 'Dave'];

console.log(startingChars); // ['Tom', Bob']
console.log(newArr); // ['Tom', 'Bob', 'Kam', 'Dave']
