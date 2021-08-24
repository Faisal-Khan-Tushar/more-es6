const numbers = [1, 2, 3, 4, 5];
const output = [];
function doubleIt(number) {
  return number * 2;
}
//with arrow function
const doubleCurrentNumber = number => number * 2;
for (const number of numbers) {
  const double = doubleCurrentNumber(number);
  output.push(double);
}
// console.log(output);
const doubleItWithMap = numbers.map(number => number * 2);
const triplingWithMap = numbers.map(number => number * 3);
// console.log(triplingWithMap);

//square of the elements within it using map
const sqaure = numbers.map(number => number * number);
// console.log(sqaure);

const friends = ['Tushar', 'Faisal', 'Rupom'];
const freindsLengthArray = friends.map(friend => friend.length);
// console.log(freindsLengthArray);
const productsOnMyDesk = [
  { name: 'Chayer cup', price: 250 },
  { name: 'water bottle', price: 450 },
  { name: 'panir glass', price: 25 },
  { name: 'monitor', price: 2500 }
];
// const nameOfThProducts = productsOnMyDesk.map(product => product.name);
// const priceOfTheProducts = productsOnMyDesk.map(product => product.price);
//If we want to see all the items that are on my desk
// console.log(productsOnMyDesk.map(product => console.log(product)));

//for each
// console.log(productsOnMyDesk.forEach(product => console.log(product)));

//use cases of filter 
const myNumbers = [1, 2, 3, 4, 5, 234234, 343];
const biggestNumbers = myNumbers.filter(number => number > 100);
const smallerNubmers = myNumbers.filter(number => number < 100);
// console.log(smallerNubmers);

//product er price gula 100 er beshi hole dekhabo.
const itemsInMyDesk = [
  { name: 'Water Bottle', price: 30, color: 'blue', brand: 'mum' },
  { name: 'Chayer Cup', price: 59, color: 'khakhi', brand: 'none' },
  { name: 'Table Clock', price: 300, color: 'black', brand: 'chinese' },
  { name: 'keyboard', price: 500, color: 'black', brand: 'custom' },
];
const hundredCrossed = itemsInMyDesk.filter(item => item.price > 100);
const blackItems = itemsInMyDesk.filter(item => item.color == 'navy')
// console.log(blackItems);
//use cases of find 
const balckColoredItems = itemsInMyDesk.find(item => item.color == 'black');
console.log(balckColoredItems);