let laptop1 = {
  cpu: "i9",
  ram: 8,
  brand: "HP",

  compare: function (other) {
    if (this.cpu > other.cpu) console.log(this);
    else console.log(other);
  },

  config: function () {
    console.log(this.cpu);
  },
};

let laptop2 = {
  cpu: "i7",
  ram: 4,
  brand: "Asus",

  config: function () {
    console.log(this.cpu); //this keyword refrences the correct obj
  },
};

laptop1.compare(laptop2);
