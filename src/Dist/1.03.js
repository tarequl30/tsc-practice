"use strict";
// Function in typescript
//normal func
//arrow func
//Normal function
function addNumber(num1, num2) {
    return num1 + num2;
}
addNumber(2, 6);
//arrow Function
var addObject = function (num1, num2) { return num1 + num2; };
// Object --> method
var pooUser = {
    name: "mezba",
    balance: 0,
    addBalance: function (balance) {
        return "This balance is : ".concat(this.balance + balance, " + balance");
    }
};
var arr = [1, 4, 6];
var newArr = arr.map(function (elem) { return elem * elem; });
