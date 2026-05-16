// Event Bubbling

parent.addEventListener("click", () => {
    console.log("Parent");
});

child.addEventListener("click", () => {
    console.log("Child");
});

// Click child:

// Child runs
// Then parent runs

// Event Capturing

parent.addEventListener(
    "click",
    () => {
        console.log("Parent");
    },
    true
);

// Runs top-down.

// Debouncing

// Used in search bars.

function debounce(fn, delay){

    let timer;

    return function(){

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn();
        }, delay);
    };
}

// Throttling

// Limits function execution frequency.