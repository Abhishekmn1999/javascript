// let num=123456;
// let num2=0;
// while(num>0){
//     console.log(num%10);
//     num=parseInt(num/10);
// }

let num = 123456;
let reversedNum = 0;

while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = parseInt(num / 10);
}

console.log("Reversed number:", reversedNum);
