var numbers = [1, 2, 3, 4, 5, 6];
// Fonction sum : additionne tous les nombres
function sum(numbers) {
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
    // acc part de 0, puis on additionne chaque num
}
// Fonction average : utilise sum pour calculer la moyenne
function average(numbers) {
    if (numbers.length === 0)
        return 0;
    return sum(numbers) / numbers.length;
}
// Fonction product : multiplie tous les nombres
function product(numbers) {
    return numbers.reduce(function (acc, num) { return acc * num; }, 1);
    // acc part de 1 (pas 0, sinon tout = 0)
}
// Tests
console.log(sum(numbers)); // 21
console.log(average(numbers)); // 3.5
console.log(product(numbers)); // 720
