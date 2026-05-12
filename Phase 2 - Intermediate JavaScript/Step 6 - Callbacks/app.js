// A callback is a function passed into another function.

function fetchData(callback){

    console.log("Fetching data...");

    callback();
}

fetchData(function(){
    console.log("Data received");
});