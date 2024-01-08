const name = "Amaan";
const name1 = "FC colloge";
const result = `The names are ${name} and ${name1} `; // using template literal
const a = new String("hello");
console.log(result);

const b = "hello";
console.log(b[1]); //e

const c = "Amaan Shaikh";
console.log(c.charAt(2)); //a

const name33 = "Aditya";

const d = "Amaan Shaikh";
console.log(d.length); //12

//charAt()
var str = "javascript";
console.log(str.charAt(4));

//concat()
var str = "javascript";
var str2 = " is a simple language"; //or var str3 = str.concat(str2)
console.log(str.concat(str2)); // we also use + operator to concat two string

//indexOf()
var s1 = "My name is amaan shaikh";
var n = s1.indexOf("shaikh");
console.log(n);

//toLowerCase()
var s2 = "My name is Amaan shaikh"; //or var s2 = s1.toLowerCase();
console.log(s2.toLowerCase());

//toUpperCase()
var s3 = "My name is amaan samad shaikh"; //or var s2 = s1.toUpperCase();
console.log(s3.toUpperCase());

//slice()
var s4 = "My name is amaan samad shaikh";
console.log(s4.slice(2, 6)); //or var s2 = s1.slice(2,5);

//trim() removes whitespaces
var s5 = "     This is javascript trim     function     ";
console.log(s5.trim());
