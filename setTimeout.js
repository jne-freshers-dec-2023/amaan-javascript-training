const msg = ()=>{
    	console.log("This will be shown after 3 seconds");
}
setTimeout(msg,3000);
console.log("This will show First");

//Using an anonnymous function
setTimeout(function(){
    console.log("This will show Second");
},4000);

// Using an arrow function
setTimeout(()=>{
    console.log("Delayed log using arrow function after 4 seconds!");
},4000);

//setInterval
function logMessage(){
    console.log("This message will be logged every 2seconds!");
}
const interValId = setInterval(logMessage,2000);
