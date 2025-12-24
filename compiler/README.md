## **Workshop Exercise: The Compiler**

In this session, you will step into the role of a Lead Engineer setting up the build pipeline for a new project. Your goal is not just to make the code run, but to configure the compiler (`tsc`) to act as a strict guardian of code quality. You will witness firsthand how changing a single line in a JSON file can dramatically alter the output of your software.

### **Phase 1: The Setup**

First, we need a laboratory. We will create a minimal project to test the compiler's behavior.

1. **Initialize the Project**  
Open your terminal and initialize the project:
```bash
npm init -y
npm install --save-dev typescript
```


2. **Create the Source Code**  
Create a file named `lab.ts`. We will intentionally write code that is valid JavaScript but questionable TypeScript to see how the compiler reacts.
```typescript
// lab.ts
const greet = (name) => {
    return "Hello, " + name;
};

const age = 25;
// Intentional error: attempting to assign a string to a number (implied)
age = "twenty-five";

console.log(greet("Developer"));
```

### **Phase 2: The Default Behavior**

Now, let's see how the compiler behaves "out of the box" without any configuration file.

1. **Run the Compiler**  
Execute the compiler directly on the file:
```bash
npx tsc lab.ts
```

2. **Observe the Output**  
* **Console:** You will likely see an error: `error TS2588: Cannot assign to 'age' because it is a constant.`
* **File System:** Look at your directory. Notice that despite the error, a `lab.js` file was created!
* **Inspection:** Open `lab.js`. Note that the `const` might have been changed to `var`, and the arrow function `=>` converted to a `function` keyword (depending on your default `tsc` version).


*Observation:* By default, TypeScript tries to be helpful. It alerts you to the logic error (reassigning a constant) but still emits the JavaScript file, assuming you might want to run it anyway.

### **Phase 3: Taking Control (`tsconfig.json`)**

We will now impose law and order using a configuration file.

1. **Generate the Config**  
```bash
npx tsc --init
```

This creates a `tsconfig.json` file. Open it and delete the comments to see the clean JSON structure.

2. **Experiment A: The Strict Gatekeeper**  
Find the option `"noEmitOnError"` (or add it if missing) and set it to `true`.
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "noEmitOnError": true
  }
}
```


* **Action:** Delete the old `lab.js` file. Run `npx tsc` (no filename needed now).
* **Result:** You will see the error message in the console, but **no** `lab.js` file is generated. You have successfully configured the compiler to block broken builds.


3. **Experiment B: Time Travel (`target`)**  
Modify `lab.ts` to use a modern feature, like an async function:
```typescript
async function getData() {
    return "Data loaded";
}
```

Now, change the `"target"` in `tsconfig.json`:
* **Set `"target": "es5"`**. Run `npx tsc`.
* *Check `lab.js`:* You will see a massive amount of code generated to polyfill the `async/await` behavior using generators and helper functions.


* **Set `"target": "es2022"`**. Run `npx tsc`.
* *Check `lab.js`:* The output will look almost identical to your input. The code is clean because modern JS engines understand async/await natively.

### **Phase 4: Reflection**

By manipulating these two settings, you have defined the boundaries of your project.

* With `noEmitOnError`, you decided that **correctness** is more important than convenience.
* With `target`, you decided between **compatibility** (older browsers) and **performance/readability** (modern environments).

This is the essence of the TypeScript Architect's role: balancing strictness with practicality to build a pipeline that serves the team's needs.