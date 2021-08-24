//usecase of filter
const numbers = [1, 2, 34, 4, 5, 3, 3334, 5];
const isBiggerthan100 = numbers.filter(number => number > 100);
const isSmallerthan100 = numbers.filter(number => number < 100);
// console.log(isSmallerthan100);
// console.log(isBiggerthan100);
const itemsInMyDesk = [
  { name: 'Water Bottle', price: 30, color: 'blue', brand: 'mum' },
  { name: 'Water Bottle 2', price: 30, color: 'blue', brand: 'mum' },
  { name: 'Chayer Cup', price: 59, color: 'khakhi', brand: 'none' },
  { name: 'Table Clock', price: 300, color: 'black', brand: 'chinese' },
  { name: 'keyboard', price: 500, color: 'black', brand: 'custom' },
];
const blackItemsOnMyDesk = itemsInMyDesk.filter(item => item.color == 'black');
// console.log(blackItemsOnMyDesk);

//usecase of find
//find lets us to return the first element that matches with our condtions. 
const blueColorItemsOnMyDesk = itemsInMyDesk.find(item => item.color == 'blue');
console.log(blueColorItemsOnMyDesk);