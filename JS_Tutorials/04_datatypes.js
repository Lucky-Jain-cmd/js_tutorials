// alert("JAI JINENDRA")      // we are using Node.js not browser
/*
Here is a **complete, simple, and interview-ready guide to JavaScript Data Types** 👇

---

# 📌 **JavaScript Data Types**

JavaScript has **two main categories** of data types:

1. **Primitive (Value types)**
2. **Non-Primitive (Reference types)**

---

## 🔹 **1. Primitive Data Types**

These store **single values** and are **immutable**.

| Type        | Description                 | Example                |
| ----------- | --------------------------- | ---------------------- |
| `Number`    | Numbers (integer & decimal) | `10`, `3.5`            |
| `String`    | Text                        | `"Hello"`              |
| `Boolean`   | True or false               | `true`, `false`        |
| `Undefined` | Declared but not assigned   | `let a;`               |
| `Null`      | Empty or no value           | `let a = null;`        |
| `BigInt`    | Very large integers         | `1234567890123456789n` |
| `Symbol`    | Unique value                | `Symbol("id")`         |

### Example

```js
let age = 25        // Number
let name = "Alex"  // String
let isActive = true // Boolean
let x              // Undefined
let y = null       // Null
```

---

## 🔹 **2. Non-Primitive (Reference Types)**

These store **multiple values** and are **mutable**.

| Type     | Example                     |
| -------- | --------------------------- |
| Object   | `{ name: "Alex", age: 25 }` |
| Array    | `[1, 2, 3]`                 |
| Function | `function hello(){}`        |

```js
let person = { name: "Alex", age: 25 }
let numbers = [1, 2, 3]
function greet() { return "Hi" }
```

---

## 🔍 **typeof Operator**

Used to find the data type.

```js
typeof 10        // "number"
typeof "Hello"   // "string"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object" (JavaScript bug)
typeof {}        // "object"
typeof []        // "object"
typeof function(){} // "function"
```

---

## 📦 **Primitive vs Non-Primitive**

| Feature     | Primitive | Non-Primitive |
| ----------- | --------- | ------------- |
| Stores      | Value     | Reference     |
| Mutable     | No        | Yes           |
| Stored in   | Stack     | Heap          |
| Compared by | Value     | Reference     |

```js
let a = 10
let b = a
b = 20
console.log(a) // 10 (unchanged)

let obj1 = { x: 1 }
let obj2 = obj1
obj2.x = 5
console.log(obj1.x) // 5
```

---

## 🧠 **Interview Tip**

> JavaScript has **7 primitive types** and **objects** as non-primitive.
> Primitive types store **values**, objects store **references**.

*/
console.log(typeof null);  //object
console.log(typeof undefined);  //undefined
console.log(typeof symbol);  //undefined

let a = true
let string_number =String(a)
console.log(string_number);
console.log(typeof(string_number));
console.log(typeof a);




