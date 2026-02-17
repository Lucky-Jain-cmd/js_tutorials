const a =1234
let b = 2
var city ="Jaipur"
age = 18




// a = 8 // Not Allowed
b = 4
city = "Jalesar"
age = 20

console.table([a,b,city,age])

var a1 = 123
var a1 = 321
let b2 = 456
// let b2 = 654  // NOT ALLOWED




/*
📌 1. Scope

var

Function-scoped or global-scoped.

Not limited to blocks like if, for, etc.

let

Block-scoped.

Exists only inside the { } where it is declared.

const

Also block-scoped.

Same scope rules as let.

Example:

if (true) {
  var a = 10
  let b = 20
  const c = 30
}
console.log(a) // 10
console.log(b) // Error
console.log(c) // Error

📌 2. Reassigning Values

var → Can be reassigned.

let → Can be reassigned.

const → Cannot be reassigned after declaration.

let x = 5
x = 10   // allowed

const y = 5
y = 10   // Error

📌 3. Re-declaration

var

Can be redeclared in the same scope.

let

Cannot be redeclared in the same scope.

const

Cannot be redeclared in the same scope.

var a = 10
var a = 20  // OK

let b = 10
let b = 20  // Error

📌 4. Hoisting

Hoisting means variables are moved to the top of their scope during compilation.

var

Hoisted and initialized with undefined.

let & const

Hoisted but not initialized.

They stay in the Temporal Dead Zone until declared.

console.log(a) // undefined
var a = 10

console.log(b) // Error
let b = 10

📌 5. Initialization Requirement

var

Can be declared without assigning a value.

let

Can be declared without assigning a value.

const

Must be initialized at the time of declaration.

var a
let b
const c = 10   // required

🧠 Final Interview Summary

Use const when the value should not change.

Use let when the value may change.

Avoid var because it causes bugs due to function scope and hoisting.
*/

