export class Cliente {
    nome;
    cpf;
    endereco;
    renda;
    contas = [];
    constructor(nome, cpf, endereco, renda) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
    }
    adicionarConta(conta) {
        this.contas.push(conta);
    }
    listarContas() {
        return this.contas;
    }
    // Getters
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getEndereco() {
        return this.endereco;
    }
    getRenda() {
        return this.renda;
    }
    getContas() {
        return this.contas;
    }
    // Setters
    setNome(nome) {
        this.nome = nome;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    setRenda(renda) {
        this.renda = renda;
    }
    setContas(contas) {
        this.contas = contas;
    }
}
