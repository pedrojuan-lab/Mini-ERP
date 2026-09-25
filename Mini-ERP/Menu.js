const prompt = require("prompt-sync")()

const Funcionario = require("./Funcionario")
const Produto = require("./Produto")
const Cliente = require("./Cliente")
const Empresa = require("./Empresa")
const Relatorio = require("./Relatorio")

class Menu {

    constructor() {
        this.empresa = new Empresa()
        this.relatorio = new Relatorio()

        this.opcoes = {
            1: () => this.cadastrarFuncionario(),
            2: () => this.cadastrarProduto(),
            3: () => this.cadastrarCliente(),
            4: () => this.realizarVenda(),
            5: () => this.adicionarEstoque(),
            6: () => this.registrarDespesa(),
            7: () => this.mostrarRelatorio(),
            0: () => console.log("Sistema encerrado!")
        }
    }

    iniciar() {
        let opcao

        do {
            console.log("===== MINI ERP =====")
            console.log("1 - Cadastrar funcionário")
            console.log("2 - Cadastrar produto")
            console.log("3 - Cadastrar cliente")
            console.log("4 - Realizar venda")
            console.log("5 - Adicionar estoque")
            console.log("6 - Registrar despesa")
            console.log("7 - Ver relatório")
            console.log("0 - Sair")

            opcao = Number(prompt("Escolha: "))

            const acao = this.opcoes[opcao] || (() => console.log("Opção inválida!"))
            acao()

        } while (opcao !== 0)
    }

    cadastrarFuncionario() {
        let nome = prompt("Nome: ")
        let cargo = prompt("Cargo: ")
        let salario = Number(prompt("Salário: "))

        this.empresa.funcionario = new Funcionario(nome, cargo, salario)

        console.log("Funcionário cadastrado!")
    }

    cadastrarProduto() {
        let nome = prompt("Produto: ")
        let categoria = prompt("Categoria: ")
        let preco = Number(prompt("Preço: "))
        let estoque = Number(prompt("Estoque: "))

        this.empresa.produto = new Produto(nome, categoria, preco, estoque)

        console.log("Produto cadastrado!")
    }

    cadastrarCliente() {
        let nome = prompt("Nome do cliente: ")
        let telefone = prompt("Telefone: ")

        this.empresa.cliente = new Cliente(nome, telefone)

        console.log("Cliente cadastrado!")
    }

    realizarVenda() {
        let quantidade = Number(prompt("Quantidade vendida: "))

        let valor = this.empresa.produto.vender(quantidade)

        this.empresa.adicionarVenda(valor)

        console.log("Venda realizada!")
        console.log("Total: R$ " + valor)
    }

    adicionarEstoque() {
        let quantidade = Number(prompt("Quantidade adicionada: "))

        this.empresa.produto.adicionarEstoque(quantidade)

        console.log("Estoque atualizado!")
    }

    registrarDespesa() {
        let valor = Number(prompt("Valor da despesa: "))

        this.empresa.adicionarDespesa(valor)

        console.log("Despesa registrada!")
    }

    mostrarRelatorio() {
        this.relatorio.mostrar(this.empresa)
    }
}

module.exports = Menu