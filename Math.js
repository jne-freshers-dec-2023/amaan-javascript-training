//ceil()
const roundedUp = Math.ceil(8.3);
console.log(roundedUp);

//floor()
const roundedDown = Math.floor(8.9);
console.log(roundedDown);

//round()
const exactlyRounded = Math.round(8.5);
console.log(exactlyRounded);

//min()
let numbers = [1, 2, 3, 4, 5];
let smallestNumber = Math.min(...numbers);
console.log(smallestNumber);

//max()
let largestNumber = Math.max(...numbers, 6);
console.log(largestNumber);

//pow() - raises the base to the exponent power.    
let result = Math.pow(2, 3);
console.log(result);
