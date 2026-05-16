// Classes

class Student{

    constructor(name, age){

        this.name = name;
        this.age = age;
    }

    greet(){

        console.log(`Hello ${this.name}`);
    }
}

const s1 = new Student("Shashank", 21);

s1.greet();

// Inheritance

class Person{

    constructor(name){
        this.name = name;
    }
}

class Student extends Person{

    study(){
        console.log(`${this.name} is studying`);
    }
}

const s = new Student("Raj");

s.study();