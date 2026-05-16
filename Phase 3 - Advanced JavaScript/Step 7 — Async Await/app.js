// Modern way to handle promises.

function fetchData(){

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
}

// Using async/await

async function getData(){

    const result = await fetchData();

    console.log(result);
}

getData();