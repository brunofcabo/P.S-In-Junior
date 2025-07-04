let valorReal = parseFloat(prompt("Insira o valor em reais:"));
let valorEuro = valorReal/6.10;
let valorDolar = valorReal/5.70;

console.log(`Valor em Real: R$${valorReal.toFixed(2)}`);
console.log(`Valor em Euro: €${valorEuro.toFixed(2)}`);
console.log(`Valor em Dólar: $${valorDolar.toFixed(2)}`);