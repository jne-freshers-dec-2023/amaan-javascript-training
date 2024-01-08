//Using forEach
    students = ["Amaan","Sajid","Alim","Azim"];
    students.forEach(element => {
    console.log("Hello " + element);
    }); 
    //Using arraor function
    const fruits = ['Apple','Banana','Orange'];
    fruits.forEach(fruits =>   {
    console.log(fruits);
    });

//Accessinng index
const colors = ['red', 'green', 'blue'];

colors.forEach((color, index) => {
console.log(`Color at index ${index}: ${color}`);
});

//Modifying Array elements
let numbers = [1,2,3,4,5,6];
numbers.forEach((num,index,arr)=>{
    arr[index] = num * 2;
});
console.log(numbers);


