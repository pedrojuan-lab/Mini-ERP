class Produto {

    constructor(nome, categoria, preco, estoque) {
        this.nome = nome
        this.categoria = categoria
        this.preco = preco
        this.estoque = estoque
        this.vendidos = 0
    }

    vender(quantidade) {
        this.estoque -= quantidade
        this.vendidos += quantidade

        return this.preco * quantidade
    }

    adicionarEstoque(quantidade) {
        this.estoque += quantidade
    }

    mostrar() {
        return this.nome + " - " + this.categoria
    }
}

module.exports = Produto