class Funcionario {

    constructor(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }

    mostrar() {
        return this.nome + " - " + this.cargo
    }

    mostrarSalario() {
        return "Salário: R$ " + this.salario
    }
}

module.exports = Funcionario