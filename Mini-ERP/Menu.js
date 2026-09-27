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

    }

    iniciar() {

        console.log("=================================")
        console.log("            MINI ERP")
        console.log("=================================")

        console.log("1 - Cadastrar funcionário")
        console.log("2 - Cadastrar produto")
        console.log("3 - Cadastrar cliente")
        console.log("4 - Realizar venda")
        console.log("5 - Adicionar estoque")
        console.log("6 - Registrar despesa")
        console.log("7 - Ver relatório")
        console.log("0 - Sair")

        const opcao = prompt("Escolha uma opção: ")

        if (opcao === "1") {

            this.cadastrarFuncionario()

        }

        if (opcao === "2") {

            this.cadastrarProduto()

        }

        if (opcao === "3") {

            this.cadastrarCliente()

        }

        if (opcao === "4") {

            this.realizarVenda()

        }

        if (opcao === "5") {

            this.adicionarEstoque()

        }

        if (opcao === "6") {

            this.registrarDespesa()

        }

        if (opcao === "7") {

            this.mostrarRelatorio()

        }

        if (opcao === "0") {

            console.log("Sistema encerrado!")

        }

    }

    cadastrarFuncionario() {

        const nome = prompt("Nome: ")
        const cargo = prompt("Cargo: ")
        const salario = Number(prompt("Salário: "))

        this.empresa.funcionario =
            new Funcionario(nome, cargo, salario)

        console.log("Funcionário cadastrado!")

        this.iniciar()

    }

    cadastrarProduto() {

        const nome = prompt("Produto: ")
        const categoria = prompt("Categoria: ")
        const preco = Number(prompt("Preço: "))
        const estoque = Number(prompt("Estoque: "))

        this.empresa.produto = new Produto(nome, categoria, preco, estoque)

        console.log("Produto cadastrado!")

        this.iniciar()

    }

    cadastrarCliente() {

        const nome = prompt("Nome do cliente: ")
        const telefone = prompt("Telefone: ")

        this.empresa.cliente = new Cliente(nome, telefone)

        console.log("Cliente cadastrado!")

        this.iniciar()

    }

    realizarVenda() {

        if (this.empresa.produto.nome === "Não cadastrado") {

            console.log("Cadastre um produto primeiro!")

            this.iniciar()

            return

        }

        const quantidade = Number(
            prompt("Quantidade vendida: ")
        )

        const valor =
            this.empresa.produto.vender(quantidade)

        this.empresa.adicionarVenda(valor)

        console.log("Venda realizada!")
        console.log("Total: R$ " + valor)

        this.iniciar()

    }

    adicionarEstoque() {

        const quantidade = Number(
            prompt("Quantidade adicionada: ")
        )

        this.empresa.produto.adicionarEstoque(quantidade)

        console.log("Estoque atualizado!")

        this.iniciar()

    }

    registrarDespesa() {

        const valor = Number(
            prompt("Valor da despesa: ")
        )

        this.empresa.adicionarDespesa(valor)

        console.log("Despesa registrada!")

        this.iniciar()

    }

    mostrarRelatorio() {

        this.relatorio.mostrar(this.empresa)

        this.iniciar()

    }

}

module.exports = Menu