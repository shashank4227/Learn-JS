// Inside Object

const user1 = {

    name: "Shashank",

    greet(){

        console.log(this.name);
    }
};

user1.greet();

// this refers to current object.

// Arrow Function Difference

const user2 = {

    name: "Raj",

    greet: () => {
        console.log(this.name);
    }
};

user2.greet();

// Arrow functions do NOT bind their own this.