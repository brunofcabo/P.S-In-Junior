let time = [];

function adicionarJogador() {
    let nome = prompt("Digite o nome do jogador:");
    let idade = parseInt(prompt("Digite a idade do jogador:"));
    let posicao = prompt("Digite a posição do jogador:");
    let pontuacao = parseFloat(prompt("Digite a pontuação do jogador:"));

    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };

    time.push(jogador);
    console.log("Jogador adicionado com sucesso!");
}

function buscarPorPosicao() {
    let posicaoBuscada = prompt("Digite a posição que deseja buscar:");
    let encontrados = [];

    for (let i = 0; i < time.length; i++) {
        if (time[i].posicao.toLowerCase() === posicaoBuscada.toLowerCase()) {
            encontrados.push(time[i]);
        }
    }

    if (encontrados.length === 0) {
        console.log("Nenhum jogador encontrado nessa posição.");
    } else {
        console.log("Jogadores na posição " + posicaoBuscada + ":");
        for (let i = 0; i < encontrados.length; i++) {
            console.log(encontrados[i]);
        }
    }
}

function listarTime() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
    } else {
        console.log("Lista de jogadores:");
        for (let i = 0; i < time.length; i++) {
            console.log(time[i]);
        }
    }
}

function calcularPontuacaoMedia() {
    if (time.length === 0) {
        console.log("Não há jogadores para calcular a média.");
        return;
    }

    let soma = 0;

    for (let i = 0; i < time.length; i++) {
        soma += time[i].pontuacao;
    }

    let media = soma / time.length;
    console.log("Pontuação média do time: " + media.toFixed(2));
}

// Menu interativo
let opcao;

do {
    opcao = prompt(
        "MENU:\n" +
        "1 - Adicionar jogador\n" +
        "2 - Buscar por posição\n" +
        "3 - Listar time\n" +
        "4 - Calcular pontuação média\n" +
        "5 - Sair\n" +
        "Escolha uma opção:"
    );

    switch (opcao) {
        case "1":
            adicionarJogador();
            break;
        case "2":
            buscarPorPosicao();
            break;
        case "3":
            listarTime();
            break;
        case "4":
            calcularPontuacaoMedia();
            break;
        case "5":
            console.log("Encerrando o programa.");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }

} while (opcao !== "5");
