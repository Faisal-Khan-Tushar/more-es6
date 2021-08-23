//recap of destructuring
const myNumbers = { x: 2, y: 3, z: 5, a: 2343 };
const { x, y } = myNumbers;
// const x = myNumbers.x;
// console.log(x, y);
const p = myNumbers?.p?.q;
// console.log(p);

//destructuring in an array
const [firstNumber, secondNumber, thirdNumber] = [100, 200, 300, 400];
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
// const { branch1 } = university.branches;
// const { subject3 } = university.subjects;
const branch1 = university.branches.branch1;
const branch4 = university?.branches?.subbranch?.location;
// console.log(branch1);
console.log(branch4);
// console.log(subject3);

