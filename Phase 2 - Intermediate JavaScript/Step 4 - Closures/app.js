// One of the MOST important JS concepts.

// A closure remembers variables from its outer scope even after the outer function finishes.

function outer(){

    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();

/* 

Output

1
2
3
 
inner() remembers count.

*/