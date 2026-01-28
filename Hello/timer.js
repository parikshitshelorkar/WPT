//is indirect call
//callback function
//Event Handler
//Listner

//All the three functions are independent of eacch other 
//so these are NON Blocking fn

//callback fun1
function processJob1(){
    console.log("Processing request1");
    console.log("Performing task1");
    console.log("Generating Response1");
    console.log("Sending Response1");
}

//callback fun2
function processJob2(){
    console.log("Processing request2");
    console.log("Performing task2");
    console.log("Generating Response2");
    console.log("Sending Response2");
}
//callback fun3
function processJob3(){
    console.log("Processing request3");
    console.log("Performing task3");
    console.log("Generating Response3");
    console.log("Sending Response3");
}
//processRequest(); --->direct call only once

//register callback function as first parametr
//set time interval for automatic function call

//setInterval is a direct call
//but proccessRequest is indirect call

//function mapping after certain interval
//schedulaing takss to be executed repeatedly after certain interval

//set background work execution after certain time interval
//is this a kind of multitasking

setInterval(processJob1, 50000);
setInterval(processJob2, 1000);
setInterval(processJob3, 10000);

//Multitasking is happening using asynchronous
console.log("The last sentence....");