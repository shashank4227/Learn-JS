// try-catch

try{

    let result = 10 / 0;

    console.log(result);

}catch(error){

    console.log("Error occurred");

}

// Async Error Handling

async function getData(){

    try{

        const response = await fetch("wrong-url");

        const data = await response.json();

        console.log(data);

    }catch(error){

        console.log(error);

    }
}