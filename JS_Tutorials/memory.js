/*
Here is a **clear, interview-ready explanation of Stack vs Heap in JavaScript** 👇

---

# 🧠 **Stack vs Heap in JavaScript**

JavaScript uses two types of memory:

* **Stack**
* **Heap**

---

## 📦 **Stack Memory**

* Stores **primitive data types**
* Stores **function calls & local variables**
* Uses **static memory allocation**
* Memory is **automatically managed**
* **Faster** than heap
* Works in **LIFO** (Last In, First Out) order

**Examples stored in stack:**

```js
let a = 10
let b = a
b = 20
```

---

## 🗄️ **Heap Memory**

* Stores **non-primitive (reference) data types**
* Stores **objects, arrays, functions**
* Uses **dynamic memory allocation**
* Slower than stack
* Managed by **garbage collector**

**Examples stored in heap:**

```js
let obj1 = { name: "Alex" }
let obj2 = obj1
obj2.name = "Bob"
```

---

## 🔍 **Key Differences**

| Feature    | Stack             | Heap                 |
| ---------- | ----------------- | -------------------- |
| Stores     | Primitive values  | Objects & references |
| Speed      | Fast              | Slower               |
| Size       | Small             | Large                |
| Allocation | Static            | Dynamic              |
| Managed by | JavaScript engine | Garbage collector    |

---

## 🧠 **Interview One-Line Answer**

> Stack stores **primitive values and function calls**, while Heap stores **objects and reference data**.
---
*/