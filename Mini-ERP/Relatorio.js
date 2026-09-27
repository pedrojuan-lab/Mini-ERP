class Relatorio {

    mostrar(empresa) {

        console.log("===== RELATÓRIO =====")

        console.log("FUNCIONÁRIO")
        console.log("Nome: " + empresa.funcionario.nome)
        console.log("Cargo: " + empresa.funcionario.cargo)
        console.log("Salário: R$ " + empresa.funcionario.salario)

        console.log("CLIENTE")
        console.log("Nome: " + empresa.cliente.nome)
        console.log("Telefone: " + empresa.cliente.telefone)

        console.log("PRODUTO")
        console.log("Nome: " + empresa.produto.nome)
        console.log("Categoria: " + empresa.produto.categoria)
        console.log("Preço: R$ " + empresa.produto.preco)
        console.log("Vendidos: " + empresa.produto.vendidos)
        console.log("Estoque: " + empresa.produto.estoque)

        console.log("FINANCEIRO")
        console.log("Vendas: R$ " + empresa.vendas)
        console.log("Despesas: R$ " + empresa.despesa)
        console.log("Saldo: R$ " + (empresa.vendas - empresa.despesa))
    }
}

module.exports = Relatorio