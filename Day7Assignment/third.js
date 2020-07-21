
console.log("Fetch API ");
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data));

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>response.json())
.then(data=>console.log(data))
