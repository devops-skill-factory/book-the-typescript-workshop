// To run this code, use the command: `tsc`
// Then execute the compiled JavaScript with: `node symbol_type.js`
"use strict";
let sym1 = Symbol();
let sym2 = Symbol("key"); // optional string key
let sym3 = Symbol("key");
console.log(sym2 === sym3); // false, symbols are unique
