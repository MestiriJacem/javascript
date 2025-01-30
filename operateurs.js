/*
📌 Les opérateurs en JavaScript

JavaScript propose différents types d'opérateurs :
1️⃣ Opérateurs arithmétiques (+, -, *, /, %, **)
2️⃣ Opérateurs de comparaison (==, ===, >, <, !=, !==)
3️⃣ Opérateurs logiques (&&, ||, !)
4️⃣ Opérateurs d'affectation (=, +=, -=, etc.)

🔹 Exemples :
*/

// Opérateurs arithmétiques
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1
console.log(a ** b); // 10^3 = 1000

// Opérateurs de comparaison
console.log(a == "10"); // true (égalité sans vérifier le type)
console.log(a === "10"); // false (égalité stricte)
console.log(a !== 10); // false

// Opérateurs logiques
let x = true;
let y = false;
console.log(x && y); // false (ET logique)
console.log(x || y); // true (OU logique)
console.log(!x); // false (NON logique)
