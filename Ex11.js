let qtdNumeros = parseInt(prompt("Insira a quantidade de números da lista:"));
let listaNumeros =[];

for (let i = 0; i < qtdNumeros; i++){
    let numero = parseInt(prompt(`Insira o número(${i+1}):`));
    listaNumeros[i] = numero;
}

let contador = 0;

for (let i = 1; i < qtdNumeros; i++){
    if (listaNumeros[i] > listaNumeros[i-1]){
        contador += 1;
    }
}

console.log(contador);