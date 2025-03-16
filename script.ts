// Primitive Types: These include string, number, and boolean.
let name1: string = "Awais"; // String type
let age: number = 25; // Number type
let isStudent: boolean = true; // Boolean type

// Arrays: Used to store multiple values of the same type.
let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let names: string[] = ["Ali", "Ahmed", "Awais"]; // Array of strings

// Tuples: Fixed-length array with specific types for each position.
let user: [string, number] = ["Awais", 123]; // Tuple with string and number

// Enum: Used to define a set of named constants.
enum UserRole {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}
let userRole: UserRole = UserRole.GUEST; // Assigning an enum value

// Any: Can hold any data type, not recommended as it removes type safety.
let anything: any;
anything = 10; // Number
anything = "Hello"; // String
anything = true; // Boolean

// Unknown: Similar to any but requires type checking before usage.
let unknownValue: unknown;
unknownValue = 12;
unknownValue = "Awais";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Safe type assertion
}

// Void: Used for functions that do not return any value.
function greet(): void {
    console.log("Hello, World!");
}

// Null and Undefined: Represent absence of value.
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Never: Represents a function that never returns (throws error or infinite loop).
function throwError(message: string): never {
    throw new Error(message);
}
