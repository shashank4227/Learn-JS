/* JavaScript is:

Single-threaded
Non-blocking */

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

/* Output

Start
End
Timer

Because:

setTimeout goes to Web APIs
Then callback queue
Event loop pushes it later

*/

