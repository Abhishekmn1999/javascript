// THIS Keyword
let laptop1={
    cpu:'i9',
    ram:8,
    brand:'HP',

    config:function(){
        console.log(this.cpu);
    }
}

let laptop2={
    cpu:'i7',
    ram:4,
    brand:'Asus',

    config:function(){
        console.log(this.cpu); //this keyword refrences the correct obj
    }
}

laptop1.config()
laptop2.config()