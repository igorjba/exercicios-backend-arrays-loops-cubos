const numeros = [3, 24, 1, 8, 11, 7, 15];

let maiorNumero = 0;
let menorNumero = numeros[0]; //Não pode ser zero, pois se o zero não estiver no array ele será contado mesmo assim, só que de forma indevida.

for (let i = 0; i < numeros.length; i++) {
    if (maiorNumero < numeros[i]) {
        maiorNumero = numeros[i];
    } else if ((menorNumero > numeros[i])) {
        menorNumero = numeros[i];
    }
} console.log(maiorNumero - menorNumero);
