const human = { name: 'Faisal Khan Tushar', age: 21, id: 2442343, religion: 'Islam', favouriteFood: 'fried rice', favouriteGame: 'Red Dead: Redepmtion' };
// const name = human.name;
// const favouriteFood = human.favouriteFood;
// const favouriteGame = human.favouriteGame;
// const id = human.id;
const { name, favouriteFood, favouriteGame, id } = human;



// console.log(name);
// console.log(name, favouriteFood);
// console.log(name);
// console.log(name, favouriteGame);
// console.log(name, id);
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
}
//ami first branch e vorti hobo ami jante chai branch ta kothay located.
//doing it first in the conventional way
// const branch1 = university.branches.branch1;
// const branch2 = university.branches.branch2;
// console.log(branch1);
// console.log(branch2);

//doing it in the shorter way using destructuring.
const { branch1 } = university.branches;
const { subject2 } = university.subjects;
console.log(subject2);
console.log(branch1);