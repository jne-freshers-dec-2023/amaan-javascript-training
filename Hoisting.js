//Vaiable hoisting
console.log(x); // undefined
var x = 5;
console.log(x); // 5

//Function Hoistinng
sayHello(); // "Hello, Amaan!"
function sayHello() {
  console.log("Hello, Amaan!");
}
