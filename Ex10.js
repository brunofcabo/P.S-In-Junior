let fila = [];
let opcao;

do {
    console.clear();
    console.log("Fila de Espera:");
    if (fila.length === 0) {
        console.log("Nenhum cliente na fila.");
    } else {
        for (let i = 0; i < fila.length; i++) {
            console.log(`${i + 1}º ${fila[i]}`);
        }
    }

    opcao = prompt(
        "\nMENU:\n" +
        "1 - Novo Cliente\n" +
        "2 - Atender Cliente\n" +
        "3 - Sair\n" +
        "Escolha uma opção:"
    );

    switch (opcao) {
        case "1":
            let nome = prompt("Digite o nome do cliente:");
            fila.push(nome);
            console.log(`${nome} foi adicionado à fila.`);
            break;

        case "2":
            if (fila.length === 0) {
                console.log("Nenhum cliente na fila para atender.");
            } else {
                let atendido = fila.shift();
                console.log(`Atendendo cliente: ${atendido}`);
            }
            break;

        case "3":
            console.log("Encerrando o programa.");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }

    if (opcao !== "3") {
        prompt("Pressione Enter para continuar...");
    }

} while (opcao !== "3");
