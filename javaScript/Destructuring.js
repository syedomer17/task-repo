const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); 
console.log(b); 
console.log(c);

const num = [1, 2, 3, 4];
const [first, , third] = num;

console.log(first); 
console.log(third);

const person = { name: "omer", age: 18 };
const { name, age } = person;

console.log(name); 
console.log(age);

const persons = { name: "syed", age: 18 };
const { name: userName, age: userAge } = persons;

console.log(userName); 
console.log(userAge);