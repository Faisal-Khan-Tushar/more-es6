const hubby = 'Faisal Khan Tushar';
let favouritePHone = 'iphone';
favouritePHone = 'Motorolla';
//template string 
const mySentance = `This is my hubby. His name is ${hubby}.His favourtie phone is ${favouritePHone}.The price of it is ${favouritePHone.length * 10}`;
// console.log(mySentance);

//default parameter
function information(name, nationality = 'Bangladeshi') {
  return 'your name is' + ' ' + name + ' ' + 'your nationality is' + ' ' + nationality;
}
const result = information('Faisal Khan Tushar');
// console.log(result);

//maximum from an given array
function maximumInAnArray(array = []) {
  const max = Math.max(...array);
  return max;
}
const myArray = [1, 2, 3, 434, 345]
const res = maximumInAnArray(myArray);
// console.log(res);

//arrow function

const mulitplyThreeNumbers = (x, y, z) => {
  const sum = x + y + z;
  const substruct = x - y - z;
  const multi = x * y * z;
  return sum + substruct + multi;
}
const res2 = mulitplyThreeNumbers(10, 5, 3);
// console.log(res2);
// console.log(res2);
//2nd thing starts here
const fish = { name: 'Rupchada', color: 'silver', price: 300, id: 234, phone: '34343485783475' };
// const name = fish.name;
// const color = fish.color;
// const price = fish.price;
//easier way
const { name, color, price } = fish;

const company = {
  name: 'Reliance company',
  location: 'India',
  engineers: {
    engineer1: 'computer engineer',
    engineer2: 'software engineer',
    engineer3: 'web developer'
  },
  salary: {
    salaryCategory1: 1000,
    salaryCategory2: 343334,
    salarycategory3: 343

  }
}
//reliance company er vitore ekjon software enginner er beton koto sheta dekhte chai.
const salary = company.salary.salaryCategory2;
const firstEngineer = company.engineers.engineer1;
const { engineer1 } = company.engineers;
const { salaryCategory2 } = company.salary;

// console.log(engineer1);
// console.log(salaryCategory2);


// console.log(name);
// console.log(name);
// console.log(name, color);
// console.log(name, price);
// console.log(name);
// console.log(name);
// console.log(name, price);
//destructring once again
const numbers = { x: 2, y: 3, z: 4, a: 5 };
// const x = numbers.x;
// const y = numbers.y;
// const z = numbers.z;
const p = numbers?.p?.q;
// console.log(p);
const { x, y, z } = numbers;
// console.log(x, y, z)
//array destructuring
const [firstNumber, secondNumber] = [100, 200, 500, 700];
// console.log(firstNumber, secondNumber, thirdNumber);

const university = {
  name: 'Daffodil International University', location: 'Dhanmondi 32',
  subjects: {
    subject1: 'Software Engineering',
    subject2: 'Computer Science & Engineering',
    subject3: 'Food & Nutrition'
  },
  branches: {
    branch1: 'Ashulia',
    branch2: 'Dhandmondi',
    branch3: 'jani na ami koi'
  }
};
console.log(university.subjects.subject3);
console.log(university?.subjects?.branch5?.exactlocation);