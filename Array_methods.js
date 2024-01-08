// Creating an example array
const numbers = [1, 2, 3, 4, 5];

const length = numbers.length;
console.log('Length:', length);

//push()
numbers.push(6);
console.log('After Push:', numbers);

//pop()
const poppedElement = numbers.pop();
console.log('Popped Element:', poppedElement);

//unshift()
numbers.unshift(0);
console.log('After Unshift:', numbers);

//shift()
const shiftedElement = numbers.shift();
console.log('Shifted Element:', shiftedElement);

//indexOf()
const index = numbers.indexOf(3);
console.log('Index of 3:', index);

//includes()
const includes3 = numbers.includes(3);
console.log('Includes 3:', includes3);

//slice()
const slicedArray = numbers.slice(1, 3);
console.log('Sliced Array:', slicedArray);

//splice()
numbers.splice(2, 0, 8, 9);
console.log('After Splice:', numbers);

//concat()
const newArray = numbers.concat([10, 11]);
console.log('Concatenated Array:', newArray);

//.join()
const joinedString = numbers.join('-');
console.log('Joined String:', joinedString);

//reverse()
const reversedArray = numbers.reverse();
console.log('Reversed Array:', reversedArray);

//sort()
const sortedArray = numbers.slice().sort((a, b) => a - b);
console.log('Sorted Array:', sortedArray);

//filter()
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

//map()
const squaredNumbers = numbers.map(num => num ** 2);
console.log('Squared Numbers:', squaredNumbers);

//reduce()
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);
