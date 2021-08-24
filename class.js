class playersOfChelsea {
  club = 'Chelsea';
  name;
  position;
  nationality;
  constructor(name, position, nationality) {
    this.name = name;
    this.position = position;
    this.nationality = nationality;
  }
  startPlaying() {
    console.log(this.name, 'please start playing');
  }
}
const romeluLukaku = new playersOfChelsea('Romelu Lukaku', 'Striker', 'Belgian');
const ngoloKante = new playersOfChelsea('Ngolo Kante', 'Box to box midfielder', 'French');


// console.log(romeluLukaku);
// romeluLukaku.startPlaying();
console.log(ngoloKante);
ngoloKante.startPlaying();
