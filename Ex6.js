function fibonacci(n){
    if (n == 0){
        return 0;
    }
    else if (n == 1){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = prompt("Digite os n termos que deseja ver de Fibonacci:");

for (let i = 0; i < n; i++){
    console.log(`Termo(${i+1}) de fibonacci é: ${fibonacci(i)}`);
}