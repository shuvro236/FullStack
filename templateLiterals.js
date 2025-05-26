//let multiLineString = "This is a\n string";// \n is used to create a new line
let multiLineString = `This is
 a string`;// ` is used to create a template literal
console.log(multiLineString);

let fristNmae = "Shuvro";
let lastName = "Sarker";

let greeting =`Hello ${fristNmae} ${lastName}, welcome to the world of JavaScript!`;
console.log(greeting);

let t =100;
let y = 20;

let sum = `The sum of ${t} and ${y} is ${t+y}`;
console.log(sum); // This will not work as expected because of the quotes