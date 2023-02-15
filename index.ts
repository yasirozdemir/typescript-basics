let myName: string = "Yasir";
// myName = 20 // Type "number" is not assignable type "string"

let anyType: any = "Hello World!";
// any type makes the valeu to have different types
anyType = 20;
anyType = true;

const multiplication = (x: number, y: number) => {
  return x * y;
};

console.log("Multiplication: ", multiplication(5, 4));

let age: number | string;
// union type
age = 20;
age = "twenty";

type MyCustomType = number | string;
let ageWcustom: MyCustomType;
// custom type
ageWcustom = 20;
ageWcustom = "twenty";

let array: [number, boolean];
// array tuples
array = [4, true];

interface user {
  // interfaces
  name: string;
  surname: string;
  age: number;
  isEmployee: boolean;
}

let user1: user = {
  name: "John",
  surname: "Doe",
  age: 35,
  isEmployee: true,
};
