// Global Variable
var i = "I am global variable";
function show() {
  console.log(i + "\n");
}
show();
function disp() {
    console.log(i + "\n");
}
disp();
if (true) {
  console.log(i + "\n");
}

// Local Variable
function show(){
    var j = "I am Local variable";
    console.log(j + "\n");
}
show();
