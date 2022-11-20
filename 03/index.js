const numeros = [54, 22, 14, 87, 9, 284];

// se for igual a 10 imprima indice de 10
//Olhar toda a array e não achei o 10, imprima -1

let achei10 = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        achei10++;
        console.log(i);
    }
}

if (achei10 === 0) {
    console.log("-1");
}


