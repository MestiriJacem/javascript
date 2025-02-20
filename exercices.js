/*
📌 Exercices pratiques : Logique et Fonctions

1️⃣ Écrivez une fonction `estPair(nombre)` qui retourne `true` si le nombre est pair, sinon `false`.
2️⃣ Demandez à l'utilisateur d'entrer un nombre et affichez s'il est positif, négatif ou nul.
3️⃣ Créez une fonction qui retourne le plus grand de deux nombres.
4️⃣ Créez un programme qui affiche les nombres pairs de 1 à 20 avec une boucle `for`.
5️⃣ Écrivez une fonction qui vérifie si un mot est un palindrome (ex: "radar" est un palindrome).
*/

// Exercice 1 : Vérifier si un nombre est pair
function estPair(nombre) {
    return nombre % 2 === 0;
}

console.log(estPair(4)); // true
console.log(estPair(7)); // false

// Exercice 2 : Vérifier si un nombre est positif, négatif ou nul
let nombre = prompt("Entrez un nombre :");
nombre = Number(nombre); // Convertir l'entrée en nombre

if (nombre > 0) {
    console.log("Le nombre est positif.");
} else if (nombre < 0) {
    console.log("Le nombre est négatif.");
} else {
    console.log("Le nombre est nul.");
}

// Exercice 3 : Trouver le plus grand de deux nombres
function max(a, b) {
    return a > b ? a : b;
}

console.log("Le plus grand entre 8 et 5 est :", max(8, 5)); // 8

// Exercice 4 : Afficher les nombres pairs de 1 à 20
console.log("Nombres pairs de 1 à 20 :");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Exercice 5 : Vérifier si un mot est un palindrome
function estPalindrome(mot) {
    let motInverse = mot.split("").reverse().join("");
    return mot.toLowerCase() === motInverse.toLowerCase();
}

console.log("radar est un palindrome ?", estPalindrome("radar")); // true
console.log("Bonjour est un palindrome ?", estPalindrome("Bonjour")); // false
