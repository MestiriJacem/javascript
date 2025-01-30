/*
📌 Exercices pratiques

1️⃣ Déclarez deux variables `nombre1` et `nombre2` et affichez leur somme.
2️⃣ Demandez à l'utilisateur son nom et affichez un message de bienvenue.
3️⃣ Créez un programme qui vérifie si un nombre est pair ou impair.
4️⃣ Demandez à l'utilisateur son âge et affichez un message selon son âge.
5️⃣ Écrivez une condition qui affiche si un nombre est positif, négatif ou nul.
*/

// Exercice 1
let nombre1 = 10;
let nombre2 = 5;
console.log("Somme :", nombre1 + nombre2);

// Exercice 2
let userName = prompt("Quel est votre nom ?");
console.log("Bienvenue, " + userName + " !");

// Exercice 3
let nombre = prompt("Entrez un nombre :");
if (nombre % 2 === 0) {
    console.log(nombre + " est pair.");
} else {
    console.log(nombre + " est impair.");
}

// Exercice 4
let age = prompt("Quel est votre âge ?");
if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}

// Exercice 5
let nombreTest = prompt("Entrez un nombre :");
if (nombreTest > 0) {
    console.log("Le nombre est positif.");
} else if (nombreTest < 0) {
    console.log("Le nombre est négatif.");
} else {
    console.log("Le nombre est nul.");
}
