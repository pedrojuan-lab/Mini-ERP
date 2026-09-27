class Empresa {

    constructor() {
        this.funcionario = {
            nome: "Não cadastrado",
            cargo: "Não cadastrado",
            salario: 0
        }

        this.produto = {
            nome: "Não cadastrado",
            categoria: "Não cadastrado",
            preco: 0,
            estoque: 0,
            vendidos: 0
        }

        this.cliente = {
            nome: "Não cadastrado",
            telefone: "Não cadastrado"
        }

        this.vendas = 0
        this.despesa = 0
    }

    adicionarDespesa(valor) {
        this.despesa += valor
    }

    adicionarVenda(valor) {
        this.vendas += valor
    }
}

module.exports = Empresa