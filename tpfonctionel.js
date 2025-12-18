// Exercice Fonction pure vs impure
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var counter = 0;
function add(a, b) {
    return a + b;
}
function increment() {
    counter++;
    return counter;
}
// Pourquoi add est-elle prévisible ?
// add est prévisible car avec les mêmes paramètres, elle donne toujours le même résultat
// Pourquoi increment ne l’est pas ?
// increment est imprévisible car elle modifie counter qui change à chaque appel
// Exercice 2 — Mettre à jour sans muter
var student = { name: "Léo", grade: 14 };
// On crée le premier Léo avec comme note 14
function updateGrade(student, newGrade) {
    return __assign(__assign({}, student), { grade: newGrade });
    // On crée une copie de Léo mais on modifie la note avec la nouvelle valeur
}
var updatedStudent = updateGrade(student, 16);
// On appelle la fonction et on stocke la copie dans updatedStudent
console.log(student); // { name: "Léo", grade: 14 } Premier Léo, note toujours à 14
console.log(updatedStudent); // { name: "Léo", grade: 16 } Deuxième Léo, copie avec note à 16
// Exercice 3 — Appliquer plusieurs fois
function applyNTimes(f, n, x) {
    // On part de x
    var result = x;
    for (var i = 0; i < n; i++) {
        // À chaque tour, on applique la fonction f sur result
        result = f(result);
    }
    // On retourne le résultat final
    return result;
}
var double = function (x) { return x * 2; };
console.log(applyNTimes(double, 3, 1)); // 8
// Tour 1 : double 1 = 2
// Tour 2 : double 2 = 4
// Tour 3 : double 4 = 8
// Exercice 4.1 — Filtrer et transformer 
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers
    .filter(function (n) { return n % 2 === 0; }) // Garde les pairs
    .map(function (n) { return n * 2; }) // Multiplie par 2
    .reduce(function (sum, n) { return sum + n; }, 0); // Additionne tout
console.log(result); // 24
// Exercice 4.2 — Somme moyenne et produit 
function sum(nums) {
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
}
function average(nums) {
    if (nums.length === 0)
        return 0;
    return sum(nums) / nums.length;
}
function product(nums) {
    return nums.reduce(function (acc, num) { return acc * num; }, 1);
}
var users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];
// Trouve le premier utilisateur majeur
var firstAdult = users.find(function (user) { return user.age >= 18; });
console.log(firstAdult); // { name: "Alice", age: 25 }
var users2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];
// Vérifie s'il y a au moins un mineur
var hasMinor = users.some(function (user) { return user.age < 18; });
// Vérifie si tous ont plus de 10 ans
var allAbove10 = users.every(function (user) { return user.age > 10; });
console.log(hasMinor); // true (Bob et Diana sont mineurs)
console.log(allAbove10); // true (tous ont plus de 10 ans)
var users3 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];
// Extrait tous les noms dans un nouveau tableau
var names = users.map(function (u) { return u.name; });
// Vérifie si "Alice" et "Eve" sont présents
var hasAlice = names.includes("Alice");
var hasEve = names.includes("Eve");
console.log(names);
console.log(hasAlice);
console.log(hasEve);
// Exercice 5.4 — flatMap
var usersWithHobbies = [
    { name: "Alice", hobbies: ["climbing", "yoga"] },
    { name: "Bob", hobbies: ["gaming"] },
    { name: "Charlie", hobbies: ["reading", "hiking"] },
];
// Aplatit tous les tableaux de hobbies en un seul tableau
var allHobbies = usersWithHobbies.flatMap(function (user) { return user.hobbies; });
console.log(allHobbies);
// ["climbing", "yoga", "gaming", "reading", "hiking"]
// Exercice 5.5 — sort et slice
var users4 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];
// Trie par âge croissant
var sortedByAge = __spreadArray([], users4, true).sort(function (a, b) { return a.age - b.age; });
// Récupère les 2 plus jeunes
var twoYoungest = sortedByAge.slice(0, 2);
console.log(twoYoungest);
console.log(users4); // Liste originale non modifiée
var data = [
    { name: "Alice", age: 25, country: "France" },
    { name: "Bob", age: 15, country: "France" },
    { name: "Charlie", age: 30, country: "Spain" },
    { name: "Diana", age: 22, country: "France" },
];
// Récupère les adultes français
var frenchAdults = data.filter(function (user) { return user.age >= 18 && user.country === "France"; });
// Trie par âge décroissant puis extrait les noms
var sortedNames = __spreadArray([], frenchAdults, true).sort(function (a, b) { return b.age - a.age; }) // b - a pour décroissant
    .map(function (user) { return user.name; });
// Calcule la moyenne d'âge
var averageAge = frenchAdults.reduce(function (sum, user) { return sum + user.age; }, 0) / frenchAdults.length;
console.log("Adultes français :", frenchAdults);
console.log("Noms triés par âge décroissant :", sortedNames);
console.log("Moyenne d'âge :", averageAge);
