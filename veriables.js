function add(num1,num2,num3=2){ //num3=2 here 2 is the default value 
    console.log(num1+" "+num2+" "+num3); //local veriable can be access only in-side the class
    return num1+num2+num3
}

let result = add(5,6); // if we assign the value it will take num3=5
console.log(result);
