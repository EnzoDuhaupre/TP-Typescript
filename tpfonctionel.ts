// Exercice Fonction pure vs impure

let counter = 0;

function add(a: number, b: number): number {
return a + b;
}

function increment(): number {
counter++;
return counter;
}

// Pourquoi add est-elle prévisible ?
// add est prévisible car avec les mêmes paramètres, elle donne toujours le même résultat
// Pourquoi increment ne l’est pas ?
// increment est imprévisible car elle modifie counter qui change à chaque appel

// Exercice 2 — Mettre à jour sans muter

const student = { name: "Léo", grade: 14 };
// On crée le premier Léo avec comme note 14

function updateGrade(student: any, newGrade: number) {
return { ...student, grade: newGrade };
// On crée une copie de Léo mais on modifie la note avec la nouvelle valeur
}

const updatedStudent = updateGrade(student, 16);
// On appelle la fonction et on stocke la copie dans updatedStudent

console.log(student); // Premier Léo, note toujours à 14
console.log(updatedStudent); // Deuxième Léo, copie avec note à 16

// Exercice 3 — Appliquer plusieurs fois

function applyNTimes(f: (x: number) => number, n: number, x: number): number {
// On part de x
let result = x;

for (let i = 0; i < n; i++) {
// À chaque tour, on applique la fonction f sur result
result = f(result);
}

// On retourne le résultat final
return result;
}

const double = (x: number) => x * 2;

console.log(applyNTimes(double, 3, 1)); // 8
// Tour 1 : double 1 = 2
// Tour 2 : double 2 = 4
// Tour 3 : double 4 = 8

// Exercice 4.1 — Filtrer et transformer 
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
.filter(n => n % 2 === 0) // Garde les pairs
.map(n => n * 2) // Multiplie par 2
.reduce((sum, n) => sum + n, 0); // Additionne tout

console.log(result); // 24

// Exercice 4.2 — Somme moyenne et produit 

function sum(nums: number[]): number {
  return nums.reduce((acc, num) => acc + num, 0);
}

function average(nums: number[]): number {
  if (nums.length === 0) return 0;
  return sum(nums) / nums.length;
}

function product(nums: number[]): number {
  return nums.reduce((acc, num) => acc * num, 1);
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

// Trouve le premier utilisateur majeur
const firstAdult = users.find(user => user.age >= 18);

console.log(firstAdult); // On trouve Alice qui à 25 ans

const users2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

// Vérifie s'il y a au moins un mineur
const hasMinor = users.some(user => user.age < 18);

// Vérifie si tous ont plus de 10 ans
const allAbove10 = users.every(user => user.age > 10);

console.log(hasMinor);    // Bob et Diana sont mineurs
console.log(allAbove10);  // Tous ont plus de 10 ans

const users3 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

// Extrait tous les noms dans un nouveau tableau
const names = users.map(u => u.name);

// Vérifie si "Alice" et "Eve" sont présents
const hasAlice = names.includes("Alice");
const hasEve = names.includes("Eve");

console.log(names);     
console.log(hasAlice);   
console.log(hasEve);  

// Exercice 5.4 — flatMap

const usersWithHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] },
];

// Aplatit tous les tableaux de hobbies en un seul tableau
const allHobbies = usersWithHobbies.flatMap(user => user.hobbies);

console.log(allHobbies); 
// ["climbing", "yoga", "gaming", "reading", "hiking"]

// Exercice 5.5 — sort et slice

const users4 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

// Trie par âge croissant
const sortedByAge = [...users4].sort((a, b) => a.age - b.age);

// Récupère les 2 plus jeunes
const twoYoungest = sortedByAge.slice(0, 2);

console.log(twoYoungest);

console.log(users4); // Liste originale non modifiée

// Partie bonus - cas concret

type User = { name: string; age: number; country: string };

const data: User[] = [
  { name: "Alice", age: 25, country: "France" },
  { name: "Bob", age: 15, country: "France" },
  { name: "Charlie", age: 30, country: "Spain" },
  { name: "Diana", age: 22, country: "France" },
];

// Récupère les adultes français
const frenchAdults = data.filter(user => user.age >= 18 && user.country === "France");

// Trie par âge décroissant puis extrait les noms
const sortedNames = [...frenchAdults]
  .sort((a, b) => b.age - a.age)  // b - a pour décroissant
  .map(user => user.name);

// Calcule la moyenne d'âge
const averageAge = frenchAdults.reduce((sum, user) => sum + user.age, 0) / frenchAdults.length;

console.log("Adultes français :", frenchAdults);


console.log("Noms triés par âge décroissant :", sortedNames);


console.log("Moyenne d'âge :", averageAge);
