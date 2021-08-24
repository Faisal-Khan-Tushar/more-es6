class playerOfClubs {
  name;
  nationality;
  position;
  constructor(name, nationality, position) {
    this.name = name;
    this.nationality = nationality;
    this.position = position;
  }
}

class playerOfBarca extends playerOfClubs {
  transferFee;
  constructor(name, nationality, position, transferFee) {
    super(name, nationality, position);
    this.transferFee = transferFee;
  }

  startPlaying() {
    console.log(this.name, 'please start playing');
  }
}
class playerOfRealMadrid extends playerOfClubs {

  goToBench(opinion) {
    console.log(this.name, 'you have been subbed.', this.name, 'said', opinion);
  }
}

class playerOfManchesterCity extends playerOfClubs {

  isHappyOrNot(opinion) {
    console.log(this.name, 'said that -', opinion)
  }
}
const memphisDepay = new playerOfBarca('MemPhis Depay', 'Netherland', 'Right wing');
// console.log(memphisDepay);
// memphisDepay.startPlaying();
const antoineGriezman = new playerOfBarca('Antione Griezman', 'French', 'winger', '80 Millon Euros')
console.log(antoineGriezman);
const karimBenzema = new playerOfRealMadrid('Karim Benzema', 'French', 'Forward');
// console.log(karimBenzema);
// karimBenzema.goToBench("I don't want to be subbed");
const ericGarcia = new playerOfManchesterCity('Eric Garcia', 'Spanish', 'Center Back');
// console.log(ericGarcia);
// ericGarcia.isHappyOrNot('I am not happy due to lack of playing time. So I want to leave');


/*to check the chaining we need to write like
memphisDepay.__proto__
mempphisDepay.__proto__.__proto__
to check whether something a class has, or inhertied them
memphisDepay.hasOwnProerpty('name') =true;
mempthisDepay.hasOwnProperty(hasOwnProperty)=false; because he has inherited it from it's parent class called playerOfClubs

*/