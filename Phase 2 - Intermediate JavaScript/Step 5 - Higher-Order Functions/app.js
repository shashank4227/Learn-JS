/* Functions that:

Take functions as arguments
OR
Return functions */

function greet(name){
    return "Hello " + name;
}

function processUser(callback){
    console.log(callback("Shashank"));
}

processUser(greet);