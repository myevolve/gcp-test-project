import { hello, add } from "./hello";

// Test hello()
console.assert(hello("World") === "Hello, World!", "hello('World') should return 'Hello, World!'");
console.assert(hello("") === "Hello, !", "hello('') should return 'Hello, !'");
console.assert(hello("Alice") === "Hello, Alice!", "hello('Alice') should return 'Hello, Alice!'");

// Test add()
console.assert(add(1, 2) === 3, "add(1, 2) should return 3");
console.assert(add(0, 0) === 0, "add(0, 0) should return 0");
console.assert(add(-1, 1) === 0, "add(-1, 1) should return 0");
console.assert(add(-3, -7) === -10, "add(-3, -7) should return -10");

console.log("All tests passed!");
