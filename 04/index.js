const multiplosDe3 = [0];

for (let i = 0; (multiplosDe3[i] % 3 == 0) && (multiplosDe3[i] <= 500); i++) {
    multiplosDe3.push(multiplosDe3[i] + 3);
    console.log(multiplosDe3[i]);
}

// for (let i = 0; i <= 500; i++) {
//     multiplosDe3.push(multiplosDe3[i] + 3);
//     console.log(multiplosDe3[i]);
// } 