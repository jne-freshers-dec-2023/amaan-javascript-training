//map()
let double = array.map(num=>num*2);
console.log(double);
 let evenNumber = array.filter(num=>num%2==0);
console.log(evenNumber);

//reduce()
let array = [12,34,65,32,87,34]
let sum=array.reduce((acc,curr)=>acc+curr);
console.log("sum of the elements in the array is "+sum);

//filter()
let arr=[1,2,3,4,5];
let result=arr.filter(x=>x%2===0);
console.log(`The even numbers are ${result}`);
