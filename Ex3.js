function verificarIdades(anos){
    let anoAtual = prompt("Insira o ano atual:");
    let resultado = [];
    for (let i = 0; i < anos.length; i++){
        let idade = anoAtual - anos[i];
        if (idade >= 18){
            resultado[i] = "maior";
            console.log(`A pessoa ${i+1} é maior de idade`);
        }
        else{
            resultado[i] = "menor";
            console.log(`A pessoa ${i+1} é menor de idade`);
        }


    }
    return resultado;
} 

anosNascimentos = [1968, 2006, 2015];
let idades = verificarIdades(anosNascimentos);
