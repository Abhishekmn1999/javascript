let num1=5;
let num2=10;

let add=num1+num2;
let diff=num1-num2;
let mul=num1*num2;
let div=num1/num2;

let opp="add";
switch(opp){
    case 'add':console.log(add);
    break;
    case 'diff':console.log(diff);
    break;
    case 'mul':console.log(mul);
    break;
    case 'div':console.log(div);
    break;
    default:
        console.log("Please select correct Option");
}
console.log("Bye...")