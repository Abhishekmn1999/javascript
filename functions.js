// function greet(){       //creating function
//     console.log("Hello World!");
// }

// greet();                //calling function

// function greet(){

// return "Hello World!"    //returning value "Hello World!"
// }

// let str=greet();
// console.log(str);

//
// function greet(user){   //parameter passing

//     return `Hello ${user}!`  //template litral
// }
// // let user='Abhishek'
// let str=greet('Abhishek'); //value assign to the function call
// console.log(str);

//arrow function

// let greet=(user) => {
//     console.log("Hello " + user);
//     return 1;
// }

// console.log(greet('Abhishek'));

// arrow function

// let add=(num1,num2)/*parameter*/ =>/* arrow fun*/ num1+num2 //return value
let add = (num1, num2) => num1 + num2;
let result = add(5, 6); // arguments
console.log(result);
