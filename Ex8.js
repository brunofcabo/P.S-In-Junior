function countBooksInCategory(categorias) {
    let contagem = {};

    for (let i = 0; i < categorias.length; i++) {
        let categoria = categorias[i].category;
        let quantidade = categorias[i].books.length;
        contagem[categoria] = quantidade;
    }

    return contagem;
}
