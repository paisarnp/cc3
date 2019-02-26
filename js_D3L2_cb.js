"use strict";
let hello = function (parameter1, parameter2, parameter3) {
    console.log('hello' + parameter1 + parameter2 + parameter3);
};
function func(callbackA, callbackB) {
    callbackA('1', '2', '3');
    callbackB('4', '5', '6');
}
func(hello, hello);
hello('7', '8', '9');