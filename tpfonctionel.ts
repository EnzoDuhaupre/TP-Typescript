const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

// Pour trouver la première personne majeur
const firstAdult = users.find(user => user.age >= 18);

console.log(firstAdult); // Donc la première personne majeur qui arrive est Alice qui à 25 ans
