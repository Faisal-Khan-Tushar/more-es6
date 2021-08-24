//I hava an array which has some names or strings inside it. Now what I want to do is, take every name and count the length of it and store all of them in another array.
const friends = ['Tushar', 'Sneha', 'Sahinoor', 'Sarwar'];
const freindsLength = friends.map(friend => friend.length);
// console.log(freindsLength);

//when I have an array of objects the usecases of map becomes mores tanginble. 
const itemsInMyDesk = [
  { name: 'Water Bottle', price: 30, color: 'blue', brand: 'mum' },
  { name: 'Chayer Cup', price: 59, color: 'khakhi', brand: 'none' },
  { name: 'Table Clock', price: 300, color: 'matte black', brand: 'chinese' },
  { name: 'keyboard', price: 500, color: 'white & black', brand: 'custom' },
];
//If we wanted to know that what elements are there in my table without using maps.
const itemNames = [];
for (const item of itemsInMyDesk) {
  itemNames.push(item.name);
}
// console.log(itemNames);

//Now if I do it with the help of maps.
const nameOfTheItems = itemsInMyDesk.map(item => item.name);
const priceOftheItems = itemsInMyDesk.map(item => item.price);
// console.log(nameOfTheItems);
// console.log(priceOftheItems);

//If I want to see all the products then I don't have to return anything. In this type of case comes the concept of for each
// const nameOfTheProducts = itemsInMyDesk.map(item => console.log(item));
//when we don't have to return anything then we can use for each in that regard.
//the differenece between map & for each is that 
//map-> map return something and stores it in an array.
//foreach->doesn't return anything just shows the result for the test case.
nameOfTheItems.forEach(item => console.log(item));