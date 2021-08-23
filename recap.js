//1.const & let
//2.template string
//3. default parameter 
//4.spraed operator 
//5.arrow function

//1.const & let
const hubby = 'Mr setvens';
let phone = 'iphone 15';
phone = 'xiomi 13';

function addTwoNumbers(x, y) {
  return x + y;
}
//2.Template string
const mySentance = `Hello there my name is ${hubby}.I now use the ${phone} mobile phone.Give me a sum ${addTwoNumbers(5, 7)}`;
// console.log(mySentance);

//3.default parameter
function fullName(firstName, lastName = 'khan') {
  return firstName + " " + lastName;
}
const name = fullName('Faisal');
// console.log(name);

//4.spread operator
function maxNumber(array = []) {
  const max = Math.max(...array);
  return max;
}
const findMyMax = maxNumber([1, 2, 34, 5]);
// console.log(findMyMax);

//5.arrow function
const addThreeNumber = (x, y, z) => x + y + z;
const result = addThreeNumber(10, 5, 5);
console.log(result);