/*
📌 Les fonctions en JavaScript

Une fonction permet de réutiliser du code facilement.  
Il existe plusieurs façons de déclarer une fonction :
1️⃣ Fonction classique (`function nom() {}`)
2️⃣ Fonction fléchée (`const nom = () => {}`)

🔹 Exemple 1 : Déclaration d'une fonction classique
*/

function direBonjour(nom) {
    console.log("Bonjour, " + nom + " !");
}

direBonjour("Alice"); // Affiche "Bonjour, Alice !"

/*
🔹 Exemple 2 : Fonction avec retour de valeur
*/

function carre(nombre) {
    return nombre * nombre;
}

console.log("Le carré de 4 est :", carre(4)); // 16

/*
🔹 Exemple 3 : Fonction fléchée (syntaxe plus courte)
*/

const multiplier = (a, b) => a * b;

console.log("3 x 5 =", multiplier(3, 5)); // 15

/*
🔹 Exemple 4 : Fonction anonyme (utilisée souvent avec des événements)
*/

const message = function() {
    console.log("Ceci est une fonction anonyme.");
};

message();

/*
🔹 Exemple 5 : Fonction avec paramètres par défaut
*/

function saluer(nom = "Utilisateur") {
    console.log("Salut, " + nom + " !");
}

saluer(); // "Salut, Utilisateur !"
saluer("Paul"); // "Salut, Paul !"
