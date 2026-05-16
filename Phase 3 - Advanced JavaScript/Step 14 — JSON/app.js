// Used everywhere in APIs.

// Convert Object → JSON

const user = {
    name: "Raj"
};

const jsonData = JSON.stringify(user);

console.log(jsonData);

// JSON → Object

const obj = JSON.parse(jsonData);

console.log(obj);