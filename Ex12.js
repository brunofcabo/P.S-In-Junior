function encontrarElementoUnico(arr) {
    let unico = 0;
    for (let i = 0; i < arr.length; i++) {
        unico ^= arr[i];
    }
    console.log("O elemento único é: " + unico);
    return unico;
}

let entrada = prompt("Digite os números separados por espaço:");
let numeros = entrada.split(" ").map(Number);

encontrarElementoUnico(numeros);
