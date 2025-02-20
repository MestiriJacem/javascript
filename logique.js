/*
📌 La logique en JavaScript

La logique en programmation repose sur :
1️⃣ Les structures conditionnelles (`if`, `else if`, `else`, `switch`)
2️⃣ Les boucles (`for`, `while`, `do while`)
3️⃣ Les opérateurs logiques (`&&`, `||`, `!`)

Ces structures permettent d'exécuter du code en fonction de conditions.

🔹 Exemple 1 : Conditions (if, else if, else)
*/

let age = 20;

if (age < 18) {
    console.log("Vous êtes mineur.");
} else if (age >= 18 && age < 60) {
    console.log("Vous êtes adulte.");
} else {
    console.log("Vous êtes senior.");
}

/*
🔹 Exemple 2 : La structure `switch`
*/

let jour = "lundi";

switch (jour) {
    case "lundi":
        console.log("C'est le début de la semaine.");
        break;
    case "vendredi":
        console.log("C'est bientôt le week-end !");
        break;
    default:
        console.log("Jour normal.");
}

/*
🔹 Exemple 3 : Les boucles
*/

console.log("🔁 Compter de 1 à 5 avec une boucle for");
for (let i = 1; i <= 5; i++) {
    console.log("Numéro : " + i);
}

console.log("🔁 Tant que la condition est vraie (while)");
let compteur = 0;
while (compteur < 3) {
    console.log("Compteur :", compteur);
    compteur++;
}

console.log("🔁 Faire au moins une itération (do while)");
let nombre = 0;
do {
    console.log("Nombre :", nombre);
    nombre++;
} while (nombre < 3);
