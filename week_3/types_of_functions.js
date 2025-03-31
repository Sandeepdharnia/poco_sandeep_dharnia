// 1️⃣ Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 2️⃣ Function Expression
const greetExp = function (name) {
  return `Hello, ${name}!`;
};
console.log(greetExp("Bob"));

// 3️⃣ Arrow Function
const greetArrow = (name) => `Hello, ${name}!`;
console.log(greetArrow("Charlie"));

// 4️⃣ Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("I run immediately!");
})();

(() => {
  console.log("I run immediately too!");
})();

// 5️⃣ Generator Function
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generateNumbers();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// 6️⃣ Async Function
async function fetchData() {
  return "Data received!";
}
fetchData().then(console.log);

// 7️⃣ Constructor Function
function Person(name) {
  this.name = name;
}
const person1 = new Person("David");
console.log(person1.name);

// 8️⃣ Method in Object
const person = {
  greet() {
    return "Hello!";
  },
};
console.log(person.greet());

// 9️⃣ Static Method in Class
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(3, 4));
