
import type { Conta } from "./Conta.js";

export class Cliente {
    private nome: string;
    private cpf: string;
    private endereco: string;
    private renda: number;
    private contas: Conta[] = [];

    constructor(nome: string, cpf: string, endereco: string, renda: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
    }

    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    listarContas(): Conta[] {
        return this.contas;
    }

    // Getters

    getNome(): string {
        return this.nome;
    }

    getCpf(): string {
        return this.cpf;
    }

    getEndereco(): string {
        return this.endereco;
    }

    getRenda(): number {
        return this.renda;
    }

    getContas(): Conta[] {
        return this.contas;
    }

    // Setters

    setNome(nome: string): void {
        this.nome = nome;
    }

    setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    setRenda(renda: number): void {
        this.renda = renda;
    }

    setContas(contas: Conta[]): void {
        this.contas = contas;
    }
}