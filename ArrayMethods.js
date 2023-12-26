let data = [];

console.log(data);

data.push(1); // add element to the array at END
console.log(data);

data.push(5);
console.log(data);


data.push(8);
console.log(data);

data.unshift(6); // add element to the array from start
console.log(data);

data.unshift(2);
console.log(data);

data.pop(); // delete element from end
console.log(data);

data.pop();
console.log(data);

data.shift(); //delete from start
console.log(data);

data.shift();
console.log(data);

data.push(2, 4, 8, 9);
console.log(data);

data.splice(2, 2); // (index_value, number_of_items delete)
console.log(data);

data.splice(2, 5, 4, 7, 9, 3); // (index_value, number_of_items delete,item,item added to array)
console.log(data);
