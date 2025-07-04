let frase = prompt("Digite uma frase:");

let limpa = frase.toLowerCase().replace(/\s/g, "");
let invertida = limpa.split("").reverse().join("");

if (limpa === invertida) {
    console.log("A frase é um palíndromo.");
} else {
    console.log("A frase não é um palíndromo.");
}
