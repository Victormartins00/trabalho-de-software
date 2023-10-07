const listaProdutos = [];

function adicionarProduto() {
    const nome = document.getElementById("nome").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);

    if (nome && quantidade > 0) {
        const produto = { nome, quantidade };
        listaProdutos.push(produto);
        atualizarListaProdutos();
        document.getElementById("nome").value = "";
        document.getElementById("quantidade").value = "";
    }
}

function atualizarListaProdutos() {
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";

    listaProdutos.forEach((produto, index) => {
        const li = document.createElement("li");
        li.innerHTML = `Produto: ${produto.nome}, Quantidade: ${produto.quantidade}`;
        const buttonRemover = document.createElement("button");
        buttonRemover.innerHTML = "Remover";
        buttonRemover.onclick = () => removerProduto(index);
        li.appendChild(buttonRemover);
        lista.appendChild(li);
    });
}

function removerProduto(index) {
    listaProdutos.splice(index, 1);
    atualizarListaProdutos();
}


atualizarListaProdutos();
