//             STRINGS IN JS
const str1 = "Lucky Jain"
const str2 = "JAI JINENDRA to all"
console.log(`${str2} My name is ${str1}`);



// Number
const num = 100
console.log(num.toString().length) //3

const n = new Number(120)
console.log(n.toString().length)  //3


# 🔥 1. What is a String in JavaScript?

A **string** is a sequence of characters used to represent text.

```js
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello World`; // Template literal
```

✔ In JavaScript, strings are **primitive data types**
✔ They are **immutable** → cannot be changed directly

```js
let s = "hello";
s[0] = "H";   // ❌ won't change
console.log(s); // "hello"
```

---

# 🔥 2. Ways to Create Strings

### 1. Literal (most common)

```js
let name = "Lucky";
```

### 2. Using constructor

```js
let name = new String("Lucky");
```

⚠️ Avoid constructor → it creates an object, not primitive

---

# 🔥 3. String Properties

### ✔ length

```js
let str = "Hello";
console.log(str.length); // 5
```

---

# 🔥 4. Accessing Characters

```js
let str = "Hello";

console.log(str[0]);        // H
console.log(str.charAt(1)); // e
```

---

# 🔥 5. Important String Methods (Detailed)

---

## 🔹 1. toUpperCase() / toLowerCase()

```js
let str = "hello";

console.log(str.toUpperCase()); // HELLO
console.log(str.toLowerCase()); // hello
```

---

## 🔹 2. trim(), trimStart(), trimEnd()

Removes spaces

```js
let str = "  hello  ";

console.log(str.trim());      // "hello"
console.log(str.trimStart()); // "hello  "
console.log(str.trimEnd());   // "  hello"
```

---

## 🔹 3. slice(start, end)

Extracts part of string

```js
let str = "JavaScript";

console.log(str.slice(0, 4)); // Java
console.log(str.slice(-6));   // Script
```

---

## 🔹 4. substring(start, end)

```js
let str = "JavaScript";

console.log(str.substring(0, 4)); // Java
```

🔸 Difference from slice:

* No negative index support

---

## 🔹 5. substr(start, length) (deprecated ⚠️)

```js
let str = "JavaScript";

console.log(str.substr(0, 4)); // Java
```

---

## 🔹 6. replace()

```js
let str = "Hello World";

console.log(str.replace("World", "JS")); // Hello JS
```

🔸 Only replaces first match

---

## 🔹 7. replaceAll()

```js
let str = "a b a b";

console.log(str.replaceAll("a", "x")); // x b x b
```

---

## 🔹 8. concat()

```js
let a = "Hello";
let b = "World";

console.log(a.concat(" ", b)); // Hello World
```

👉 Better: use `+` or template literals

---

## 🔹 9. includes()

```js
let str = "JavaScript";

console.log(str.includes("Script")); // true
```

---

## 🔹 10. startsWith() / endsWith()

```js
let str = "JavaScript";

console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true
```

---

## 🔹 11. indexOf() / lastIndexOf()

```js
let str = "hello hello";

console.log(str.indexOf("hello"));     // 0
console.log(str.lastIndexOf("hello")); // 6
```

---

## 🔹 12. charAt() / charCodeAt()

```js
let str = "A";

console.log(str.charAt(0));     // A
console.log(str.charCodeAt(0)); // 65 (ASCII)
```

---

## 🔹 13. split()

Converts string → array

```js
let str = "a,b,c";

console.log(str.split(",")); // ["a","b","c"]
```

---

## 🔹 14. join() (array → string)

```js
let arr = ["a", "b", "c"];

console.log(arr.join("-")); // a-b-c
```

---

## 🔹 15. repeat()

```js
let str = "Hi";

console.log(str.repeat(3)); // HiHiHi
```

---

## 🔹 16. padStart() / padEnd()

```js
let str = "5";

console.log(str.padStart(3, "0")); // 005
console.log(str.padEnd(3, "0"));   // 500
```

---

## 🔹 17. match() (with regex)

```js
let str = "abc123";

console.log(str.match(/\d+/)); // ["123"]
```

---

## 🔹 18. search()

```js
let str = "hello123";

console.log(str.search(/\d/)); // 5
```

---

## 🔹 19. localeCompare()

```js
console.log("a".localeCompare("b")); // -1
```

---

## 🔹 20. valueOf() / toString()

```js
let str = "Hello";

console.log(str.valueOf()); // Hello
console.log(str.toString()); // Hello
```

---

# 🔥 6. Template Literals (VERY IMPORTANT 🔥)

```js
let name = "Lucky";
let age = 21;

console.log(`My name is ${name} and I am ${age}`);
```

✔ Multi-line support:

```js
let str = `Hello
World`;
```

---

# 🔥 7. Escape Characters

```js
let str = "He said \"Hello\"";
console.log(str);
```

Common:

* `\n` → new line
* `\t` → tab
* `\\` → backslash

---

# 🔥 8. String Immutability (IMPORTANT)

```js
let str = "hello";

str[0] = "H"; // ❌ not allowed

str = "Hello"; // ✅ allowed (new string)
```

---

# 🔥 9. Looping Through String

```js
let str = "hello";

for (let char of str) {
  console.log(char);
}
```

---

# 🔥 10. Interview Tricks 🔥

### ✔ Reverse String

```js
let str = "hello";

let rev = str.split("").reverse().join("");
console.log(rev); // olleh
```

---

### ✔ Check Palindrome

```js
let str = "madam";

let rev = str.split("").reverse().join("");

console.log(str === rev); // true
```

---

### ✔ Count Characters

```js
let str = "hello";

let count = {};

for (let ch of str) {
  count[ch] = (count[ch] || 0) + 1;
}

console.log(count);
```

---

# 🔥 11. Important Differences

### slice vs substring

| Feature        | slice | substring |
| -------------- | ----- | --------- |
| Negative index | ✅     | ❌         |
| Swaps args     | ❌     | ✅         |

---

# 🔥 Final Summary (Must Remember)

✔ Strings are **immutable**
✔ Most used methods:

* `slice()`
* `includes()`
* `replace()`
* `split()`
* `trim()`

✔ Use **template literals (`)** instead of concat  
✔ Avoid `new String()`
This is a **very important interview question** 🔥 — let’s make it crystal clear:

---

# 🔥 slice() vs splice() in JavaScript

| Feature                 | `slice()` 🟢    | `splice()` 🔴          |
| ----------------------- | --------------- | ---------------------- |
| Type                    | Non-destructive | Destructive            |
| Changes original array? | ❌ No            | ✅ Yes                  |
| Returns                 | New array       | Removed elements       |
| Use case                | Copy / extract  | Add / remove / replace |

---

# 🟢 1. slice() → Extract (NO change in original)

### 👉 Syntax:

```js
arr.slice(start, end)
```

* `start` → index to begin
* `end` → index (excluded)

---

### ✅ Example:

```js
let arr = [1, 2, 3, 4, 5];

let result = arr.slice(1, 4);

console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5] (unchanged)
```

---

### 🔹 Negative Index:

```js
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(-2)); // [4, 5]
```

---

# 🔴 2. splice() → Modify (changes original array)

### 👉 Syntax:

```js
arr.splice(start, deleteCount, newItems...)
```

---

### ✅ Example 1: Remove elements

```js
let arr = [1, 2, 3, 4, 5];

let removed = arr.splice(1, 2);

console.log(removed); // [2, 3]
console.log(arr);     // [1, 4, 5]
```

---

### ✅ Example 2: Add elements

```js
let arr = [1, 2, 5];

arr.splice(2, 0, 3, 4);

console.log(arr); // [1, 2, 3, 4, 5]
```

---

### ✅ Example 3: Replace elements

```js
let arr = [1, 2, 3, 4];

arr.splice(1, 2, 99, 100);

console.log(arr); // [1, 99, 100, 4]
```

---

# 🔥 Key Difference in One Line

👉 `slice()` → **copy karta hai** (safe)
👉 `splice()` → **original array ko change karta hai** (dangerous in interviews 😄)

---

# 🧠 Interview Trick Question

```js
let arr = [1, 2, 3];

arr.slice(1, 2);
console.log(arr);
```

👉 Output: `[1, 2, 3]` (no change)

---

```js
let arr = [1, 2, 3];

arr.splice(1, 1);
console.log(arr);
```

👉 Output: `[1, 3]` (changed)

---

# 🚀 When to Use What?

✔ Use `slice()` when:

* You want **copy**
* You don’t want to modify original data

✔ Use `splice()` when:

* You want to **insert / delete / update**
* You want to **modify original array**


Math.random()
Returns a floating-point number in the range:
0≤value<1

e.g. function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomInt(5, 10); // 5 to 10



| Formula                                             | Result            |
| --------------------------------------------------- | ----------------- |
| `Math.floor(Math.random() * (max - min)) + min`     | min ≤ x < max     |
| `Math.floor(Math.random() * (max - min + 1)) + min` | **min ≤ x ≤ max** |
