// Primitive Types
let name1: string = "Awais"; // String type
let age: number = 25; // Number type
let isStudent: boolean = true; // Boolean type

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
let names: string[] = ["Ali", "Ahmed", "Awais"]; // Array of strings

// Tuples
let userTuple: [string, number] = ["Awais", 123]; // Tuple with string and number

// Enum
enum UserRole {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}
let userRole: UserRole = UserRole.GUEST;

// Any Type (Not Recommended)
let anything: any;
anything = 10;
anything = "Hello";
anything = true;

// Unknown Type
let unknownValue: unknown;
unknownValue = 12;
unknownValue = "Awais";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

// Void: Function that does not return a value
function greet(): void {
    console.log("Hello, World!");
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Never: Function that never returns
function throwError(message: string): never {
    throw new Error(message);
}

// Interfaces
interface User {
    name: string;
    password: number;
    email: string;
    gender?: string; // Optional property
}

// Extending Interface
interface Admin extends User {
    admin: boolean;
}

// Function using Interface
function add(obj: User) {
    console.log(`User: ${obj.name}, Email: ${obj.email}`);
}
add({ name: "Awais", password: 123, email: "awais@gmail.com" });

// Type Aliases
type Value = string | number | null;
let a: Value;

// Intersection Types
type Admins = User & {
    getDetails: (username: string) => void;
};

function abcd(obj: Admins) {
    obj.getDetails("Awais"); // Calling the function properly
}
