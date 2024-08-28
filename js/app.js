let totalCarrinho;
limpar();

function adicionar() {
    //puxa nome, quantidade e valor unitário
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(`-`)[0];
    let quantidade = document.getElementById('quantidade').value;
    let valorUnitario = produto.split(`R$`)[1];
    //proteção para verificar se algum produto foi selecionado
    if (produto == 'selecione') {
        alert(`Selecione um produto.`);
        return;
    }
    //proteção que verifica se a quantidade está vazio
    if (quantidade <= 0) {
        alert(`Campo "quantidade" está vazio ou com número incorreto incorreto. Verifique!`);
        return;
    }
    //proteção que verifica se é um número
    if (isNaN(quantidade)) {
        alert(`No campo 'quantidade' precisa ser inserido um número`);
        return;
    }
    //proteção que limita quantidade
    if (quantidade > 3) {
        alert(`A quantidade deve ser de no máximo 3.`);
        return;
    }
    //calcula subtotal de valor unitário * quantidade
    let subTotal = quantidade * valorUnitario;
    //adiciona nome, quantidade e valor no carrinho
    let carrinho = document.getElementById(`lista-produtos`);
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
    </section>`;
    //puxa, zera o valor do carrinho e prepara para soma
    totalCarrinho = totalCarrinho + subTotal;
    let campoTotal = document.getElementById(`valor-total`);
    campoTotal.textContent = `R$${totalCarrinho}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    document.getElementById('quantidade').value = 0;
}