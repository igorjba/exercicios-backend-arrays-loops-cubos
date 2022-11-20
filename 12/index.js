const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

//parar quando não tiver mais ninguém na filaDeFora

for (let i = 0; i < 5; i++) {
    if (filaDeFora.length > 0 && filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora[0]);
        filaDeFora.shift(filaDeFora[0]);
    }
}
console.log(filaDeDentro);
console.log(filaDeFora);