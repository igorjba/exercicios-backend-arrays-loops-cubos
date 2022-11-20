const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 == 0) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
}
console.log("For Tradicional")
console.log(pares);
console.log(impares);

const forOfPares = [];
const forOfImpares = [];

for (let numero of original) {
    if (numero % 2 == 0) {
        forOfPares.push(numero);
    } else {
        forOfImpares.push(numero);
    }
}
console.log("For of")
console.log(forOfPares);
console.log(forOfImpares);

const whillePares = [];
const whilleImpares = [];

let i = 0;
while (i < original.length) {
    if (original[i] % 2 == 0) {
        whillePares.push(original[i]);
    } else {
        whilleImpares.push(original[i]);
    }
    i++;
}

console.log("While")
console.log(whillePares);
console.log(whilleImpares);

