// Default Para
function add(a,b=30,c=20)
{
    return a+b+c;
}
console.log(add(12));

//Temaplate Literals
let x = "Hello", y = "World", z = "!";
let s = `${x}${y}${z}`;
console.log(s);

