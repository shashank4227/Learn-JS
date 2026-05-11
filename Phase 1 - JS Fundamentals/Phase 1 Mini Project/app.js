function calculator(a, operator,b){

    if(operator === "+"){
        return a + b;
    }

    else if(operator === "-"){
        return a - b;
    }

    else if(operator === "*"){
        return a * b;
    }

    else if(operator === "/"){
        return a / b;
    }

    else{
        return "Invalid operator";
    }
}

console.log(calculator(10,"-",5));