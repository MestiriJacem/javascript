/*
📌 Les variables en JavaScript

En JavaScript, on utilise :
- `var` (ancienne syntaxe, à éviter)
- `let` (pour une variable modifiable)
- `const` (pour une constante)

Exemples :
*/

let prenom = "Alice";
const age = 25;
console.log("Nom :", prenom);
console.log("Âge :", age);

// Modification de variable (possible avec let)
prenom = "Bob";
console.log("Nouveau nom :", prenom);

// Erreur : on ne peut pas modifier une constante
// age = 30; // ❌ Cela provoquera une erreur

/*
📌 Les bonnes pratiques :
✅ Utiliser `let` pour les variables modifiables
✅ Utiliser `const` pour les valeurs fixes
*/
