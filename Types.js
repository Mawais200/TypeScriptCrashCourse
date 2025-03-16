"use strict";
// Primitive Types
let name1 = "Awais"; // String type
let age = 25; // Number type
let isStudent = true; // Boolean type
// Arrays
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let names = ["Ali", "Ahmed", "Awais"]; // Array of strings
// Tuples
let userTuple = ["Awais", 123]; // Tuple with string and number
// Enum
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["GUEST"] = "guest";
    UserRole["SUPER_ADMIN"] = "super_admin";
})(UserRole || (UserRole = {}));
let userRole = UserRole.GUEST;
// Any Type (Not Recommended)
let anything;
anything = 10;
anything = "Hello";
anything = true;
// Unknown Type
let unknownValue;
unknownValue = 12;
unknownValue = "Awais";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
// Void: Function that does not return a value
function greet() {
    console.log("Hello, World!");
}
// Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
// Never: Function that never returns
function throwError(message) {
    throw new Error(message);
}
// Function using Interface
function add(obj) {
    console.log(`User: ${obj.name}, Email: ${obj.email}`);
}
add({ name: "Awais", password: 123, email: "awais@gmail.com" });
let a;
function abcd(obj) {
    obj.getDetails("Awais"); // Calling the function properly
}
