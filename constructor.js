function Alien(name, tech) {
  //constructor (First Letter Capital)
  this.name = name;
  this.tech = tech;

  this.work = function () {
    console.log("Solving bugs");
  }

}

let alien1 = new Alien("Abhi", "Web");
let alien2 = new Alien("Arun", "java");

alien1.tech = "BlockChain"; //change the value it not affect to other obj
console.log(alien2);
console.log(alien1);

