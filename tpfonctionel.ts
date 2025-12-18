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

console.log(student); // { name: "Léo", grade: 14 } Premier Léo, note toujours à 14
console.log(updatedStudent); // { name: "Léo", grade: 16 } Deuxième Léo, copie avec note à 16

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

console.log(sum(numbers)); // 21
console.log(average(numbers)); // 3.5
console.log(product(numbers)); // 720
