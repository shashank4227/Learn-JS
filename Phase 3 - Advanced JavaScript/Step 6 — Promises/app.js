// Promises handle asynchronous operations.

// Why Needed?

// Instead of callback hell:

getData(() => {
    getMoreData(() => {
        getFinalData();
    });
});

// We use promises.

// Creating Promise

const promise = new Promise((resolve, reject) => {

    let success = true;

    if(success){
        resolve("Success");
    }else{
        reject("Failed");
    }
});

// Using Promise

promise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});