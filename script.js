"use strict";
// Primitive Types: These include string, number, and boolean.
let name1 = "Awais"; // String type
let age = 25; // Number type
let isStudent = true; // Boolean type
// Arrays: Used to store multiple values of the same type.
let numbers = [1, 2, 3, 4, 5]; // Array of numbers
let names = ["Ali", "Ahmed", "Awais"]; // Array of strings
// Tuples: Fixed-length array with specific types for each position.
let user = ["Awais", 123]; // Tuple with string and number
// Enum: Used to define a set of named constants.
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["GUEST"] = "guest";
    UserRole["SUPER_ADMIN"] = "super_admin";
})(UserRole || (UserRole = {}));
let userRole = UserRole.GUEST; // Assigning an enum value
// Any: Can hold any data type, not recommended as it removes type safety.
let anything;
anything = 10; // Number
anything = "Hello"; // String
anything = true; // Boolean
// Unknown: Similar to any but requires type checking before usage.
let unknownValue;
unknownValue = 12;
unknownValue = "Awais";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Safe type assertion
}
// Void: Used for functions that do not return any value.
function greet() {
    console.log("Hello, World!");
}
// Null and Undefined: Represent absence of value.
let nullValue = null;
let undefinedValue = undefined;
// Never: Represents a function that never returns (throws error or infinite loop).
function throwError(message) {
    throw new Error(message);
}
