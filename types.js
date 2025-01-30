/*
📌 Les types de données en JavaScript

JavaScript possède plusieurs types de données :
1️⃣ String (chaîne de caractères)
2️⃣ Number (nombres)
3️⃣ Boolean (true ou false)
4️⃣ Null (valeur vide)
5️⃣ Undefined (variable non définie)
6️⃣ Object (objets, tableaux, fonctions)

Exemples :
*/

let texte = "Bonjour"; // String
let nombre = 42; // Number
let decimal = 3.14; // Number
let isTrue = true; // Boolean
let valeurNulle = null; // Null
let valeurIndefinie; // Undefined

console.log(typeof texte); // "string"
console.log(typeof nombre); // "number"
console.log(typeof decimal); // "number"
console.log(typeof isTrue); // "boolean"
console.log(typeof valeurNulle); // "object" (bug historique de JavaScript)
console.log(typeof valeurIndefinie); // "undefined"

/*
📌 Exemples avancés :
*/

let tableau = [1, 2, 3, 4]; // Tableau
let objet = { nom: "Alice", age: 25 }; // Objet

console.log(tableau[0]); // 1
console.log(objet.nom); // Alice
