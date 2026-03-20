 alert("JAI JINENDRA")      // we are using Node.js not browser

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

console.log(typeof null);  //object
console.log(typeof undefined);  //undefined
console.log(typeof symbol);  //undefined

let a = true
let string_number =String(a)
console.log(string_number);  //"true" (string value)
console.log(typeof(string_number));     // string
console.log(typeof a);          //boolean


This is **the exact confusion most people have**—and clearing this will make your fundamentals very strong 👇

---

# 🔥 Your Question

```javascript
let a = 10;
a = 20; // possible
```

👉 “If primitive is immutable, why can we change `a`?”

---

# ✅ The Key Idea (Very Important)

👉 **You are NOT changing the value `10`**
👉 You are **reassigning the variable `a` to a new value `20`**

---

# 🧠 Step-by-step understanding

### Step 1:

```javascript
let a = 10;
```

👉 Memory:

```
a → 10
```

---

### Step 2:

```javascript
a = 20;
```

👉 What happens?

❌ JS does NOT modify `10` → `20`
✅ It creates a **new value `20`** and makes `a` point to it

```
a → 20
```

👉 The old `10` is untouched (immutable)

---

# 🔥 What “immutable” REALLY means

👉 **Immutable ≠ variable cannot change**
👉 **Immutable = value itself cannot be modified**

---

# ⚡ Compare with object (mutable)

```javascript
let obj = { value: 10 };
obj.value = 20;
```

👉 Here:

* SAME object
* value inside changed

---

# 🧊 vs 🧱 Analogy

### Primitive (Immutable) 🧊

* Like a **number written on paper**
* You can’t change “10” into “20”
* You **erase and write a new number**

---

### Object (Mutable) 🧱

* Like a **whiteboard**
* You can directly edit what's written

---

# 🔥 Interview-Level Answer

👉 When you do:

```javascript
a = 20;
```

* You are **not mutating 10**
* You are **reassigning `a` to a new value**

---

# 🔹 Proof Example

```javascript
let a = 10;
let b = a;

a = 20;

console.log(b); // 10 ✅
```

👉 If `10` was mutated → `b` would also change
👉 But it doesn’t → proves immutability

---

# 💡 Final One-Line Answer

👉 **Primitives are immutable because their values cannot be changed—only the variable reference can be reassigned to a new value.**


