const letras = ["A", "a", "B", "C", "E", "e"];

let contador = 0;

for (let i = 0; i < letras.length; i++) {
    if (letras[i] === "E" || letras[i] === "e") {
        contador++;
    }
}
const ternario = contador > 1 ? `Foram encontradas ${contador} letras "E" ou "e".` : `Foi encontrada ${contador} letra "E" ou "e".`;

if (contador === 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
} else {
    console.log(ternario);
}

// if (contador > 1) {
//     console.log(`Foram encontradas ${contador} letras "E" ou "e".`);
// } else if (contador = 1) {
//     console.log(`Foi encontrada ${contador} letra "E" ou "e".`);
// } else {
//     console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
// }

// ? -> se for | : -> se não
//console.log(ternario);

// let contador = 0;

// for (let letra of letras) {
//     if (letra === "E" || letra === "e") {
//         contador++
//     }
// }
// if (contador !== 0) {
//     console.log(`Foi/Foram encontrada(s) ${contador} letra(s) "E" ou "e".`);
// } else {
//     console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
// }
