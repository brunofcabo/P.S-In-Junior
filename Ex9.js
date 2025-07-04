function authors(categorias) {
    let lista = [];

    for (let i = 0; i < categorias.length; i++) {
        let livros = categorias[i].books;
        for (let j = 0; j < livros.length; j++) {
            let autor = livros[j].author;
            if (!lista.includes(autor)) {
                lista.push(autor);
            }
        }
    }

    return lista;
}
