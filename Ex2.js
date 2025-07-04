let resposta;

do{
    let numero = prompt("Insira um número inteiro e positivo:");

    while (numero < 0){
        numero = prompt("Erro! Insira  número novamente:")
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    console.log(`Fatorial de ${numero} é ${fatorial}`);
    resposta = prompt("Deseja calcular o fatorial de outro número?");
} while(resposta == "S" || resposta == "s");