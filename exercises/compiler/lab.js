"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lab.ts
const greet = (name) => {
    return "Hello, " + name;
};
const age = 25;
// Intentional error: attempting to assign a string to a number (implied)
age = "twenty-five";
console.log(greet("Developer"));
// Modern JS Style
async function getData() {
    return "Data loaded";
}
//# sourceMappingURL=lab.js.map