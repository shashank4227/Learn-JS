// Every object in JS has a prototype.

const arr = [1,2,3];

console.log(arr.__proto__);

// Array methods come from prototype.

// Add Custom Method

Array.prototype.sayHello = function(){

    console.log("Hello");
};

const nums = [1,2];

nums.sayHello();