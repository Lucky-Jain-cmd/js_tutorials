//             STRINGS IN JS
const str1 = "Lucky Jain"
const str2 = "JAI JINENDRA to all"
console.log(${str2} My name is ${str1}`);



// Number
const num = 100
console.log(num.toString().length) //3

const n = new Number(120)
console.log(n.toString().length)  //3


/*

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

*/
