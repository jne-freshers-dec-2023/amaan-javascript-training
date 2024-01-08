//Function Expression
function msg()
{
    alert("Hello ! This is message");
}           

//Anonymous Function
var myfun2 = function(){
    console.log("Amaan Shaikh");
};

// Arrow Function
var myfun = (a, b) => {
    console.log(a + " " + b+ " "); //10 20
    console.log(a + b); //30
}
myfun(10, 20);
var myfun = (a, b) => {return a+b}
    
    console.log(myfun(10, 20)); 
