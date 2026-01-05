"use strict";
// Create a unique Symbol
const SECRET_CODE = Symbol("secret");
// Create the object with both standard and Symbol keys
const agent = {
    name: "James Bond", // Standard string key
    [SECRET_CODE]: "007" // Symbol key (Must use brackets!)
};
// Accessing the properties
console.log(agent.name); // Output: James Bond
console.log(agent[SECRET_CODE]); // Output: 007
// Proof of "Hidden" nature
// Symbols do not show up in standard loops
for (const key in agent) {
    console.log(key); // Output: "name" (The symbol is invisible here)
}
