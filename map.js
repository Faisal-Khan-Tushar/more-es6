//ekta array ache, oitar vitore je number gula ache, tader ke double koro
const numbers = [1, 2, 3, 4, 5];
const output = [];
function doubleTheNumber(number) {
  return number * 2;
}
const doubleIt = number => number * 2;
for (const number of numbers) {
  // const doubledNumber = doubleTheNumber(number);
  const doubledNumber = doubleIt(number);
  output.push(doubledNumber);
}
// console.log(output);
//loop through each and every elememnt
//for each element call the function
//store every element in an array
const output2 = numbers.map(number => number * 2);
// console.log(output2);
const tripleIt = numbers.map(x => x * 3);
// console.log(tripleIt);
const surNames = ['Tushar', 'Sneha'];
const res4 = surNames.map(name => name + ' ' + 'khan');
console.log(res4);