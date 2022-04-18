

// A function is a block of code designed to perform
// a particular task/procedure. (subroutine)

// We Invoce "Call" whenever we want it to do something.
// We need to define what we want to task to do
//
function SayHello1() {
    console.log("HELLO", myName);
    console.log("How Are You");   /*everything inside this function its body of our function*/
}

// SayHello();  /*here a call my code inside the function*/
var myName = "Bro";
SayHello1();




function SayHello(myName) {
    console.log("HELLO", myName);
    console.log("How Are You");   /*everything inside this function its body of our function*/
}

// SayHello();  /*here a call my code inside the function*/

SayHello("Bros");
