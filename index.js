var myName = "Yasir";
// myName = 20 // Type "number" is not assignable type "string"
var anyType = "Hello World!";
// any type makes the valeu to have different types
anyType = 20;
anyType = true;
var multiplication = function (x, y) {
    return x * y;
};
console.log("Multiplication: ", multiplication(5, 4));
var age;
// union type
age = 20;
age = "twenty";
var ageWcustom;
// custom type
ageWcustom = 20;
ageWcustom = "twenty";
var array;
// array tuples
array = [4, true];
var user1 = {
    name: "John",
    surname: "Doe",
    age: 35,
    isEmployee: true
};
