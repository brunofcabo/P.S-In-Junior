let numero = prompt("Insira o número:");

if (numero % 3 === 0 && numero % 5 === 0){
    console.log("fizzbuzz");
}

else if (numero % 3 === 0){
    console.log("fizz");
}

else if (numero % 5 === 0){
    console.log("buzz");
}
