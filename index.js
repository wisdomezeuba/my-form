 const numbers = [1,2,3,4,5];

 // Double each number
 const doubled = numbers.map(num => num * 2);
 console.log(doubled); // Output: [2,4,6,8,10]

 //filter out even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); //output: [2,4]

//sum all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); //output; 15