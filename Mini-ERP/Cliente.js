class Cliente {

    constructor(nome, telefone) {
        this.nome = nome
        this.telefone = telefone
    }

    mostrar() {
        return this.nome + " - " + this.telefone
    }
}

module.exports = Cliente