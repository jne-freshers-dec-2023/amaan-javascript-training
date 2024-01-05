let [name, age, salary] = ["Amaan", 22, 45000];
console.log(name); // Amaan

//Ternary operator
let m = 45;
let result = m >= 30 ? "Pass" : "Fail";
console.log(result);//Pass

//Multiple condition checking includes() & indexOf()
let value = "Two";
if ([1, "one", 2, "Two"].indexOf(value) >= 0) {
    console.log("you are pass"); // you are pass
}

for (i = 0; i <= 1; i++) {
    console.log("Hello Amaan\n");//Hello Amaan
}

//Repeat a string multiple times
console.log("Amaan Shaikh \n".repeat(10));

// Double bitwise NOT operator(~~)
const floor = ~~7.8;
console.log(floor); // 7

// using spread operator
const arr = [2, 4, 5, 6, 9, 34, 65];
console.log(Math.max(...arr)); // 65
console.log(Math.min(...arr)); // 2

let arr1 = [20, 30];
let merge = [...arr1, 40, 50, 60];
console.log(merge); // 20,30,40,50,60

// get character from string
let str = "Amaan Shaikh";
console.log(str[3]); // a

//swap two variables w/o using third variable
let x = "Hello",y = 55;
[x, y] = [y, x];
console.log(y);//55
