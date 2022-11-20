const numeros = [2, 3, 4, 6];

//let i = 0;
let soma = 0;

//lendo o for tradicional
//let i = 10; //Qual é o primeiro ÍNDICE do valor que você quer imprimir ? Quero começar do 10
//i >= 0; //Até quando você quer fazer o loop? Enquanto for maior ou igual a 0
//i--; //O que eu quero fazer depois que eu imprimo? quero dinimuir 1


for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
} console.log(soma);