// It is used to pause the execution of the function until the Promise is resolved, and it then returns the resolved value.
// The `await` keyword can only be used in an async function. 
// The async keyword is used to declare an asynchronous function. An asynchronous function always returns a Promise.

async function fetchData() {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.error('Error Fetching Data:', error);
    }
}

fetchData();

