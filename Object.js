//Declaration of object by literal
const student = {
  fees: 100,
  name: "Amaan Shaikh",
  salary: 40000,
  age: 23,
};
//Accessing the property using dot notation.
console.log(student.name);
//Updating a property value
student.age = 25;
console.log(student.age);

//By Object constructor
const emp = new Object();
emp.id = 101;
emp.name = "Amaan";
emp.salary = 40000;
console.log(emp);

//Accessing and adding properties
console.log(emp["id"] + " " + emp["name"] + " " + emp["salary"]);
//Adding methods to an object
emp.age = 23;
//Console Object keys
console.log("Object Keys : ", Object.keys(emp));

const keys = Object.keys(emp);
const values = Object.values(emp);
const entries = Object.entries(emp);
console.log("Keys : \n", keys);
console.log("Values:\n", values);
console.log("Entries:\n", entries);
