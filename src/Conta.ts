import type { Cliente } from "./Cliente.js";

import {
    ValorInvalido,
    ContaBloqueada,
    SaldoInsuficiente,
    LimiteDiarioExcedido
} from "./Excecoes.js";

export class Conta {
    private numero: number;
    private agencia: number;
    private dataAbertura: Date;
    private saldo: number;
    private bloqueada: boolean = false;
    private limiteDiario: number;
    private saquesDia: number = 0;
    private titular: Cliente;

    constructor(
        numero: number,
        agencia: number,
        saldo: number,
        titular: Cliente,
        limiteDiario: number = 500
    ) {
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
        this.titular = titular;
        this.limiteDiario = limiteDiario;
        this.dataAbertura = new Date();

        titular.adicionarConta(this);
    }

    // Operações bancárias

    depositar(valor: number): void {
        if (valor <= 0 || !Number.isFinite(valor)) {
            throw new ValorInvalido();
        }

        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado!`);
    }

    sacar(valor: number): void {
        if (valor <= 0 || !Number.isFinite(valor)) {
            throw new ValorInvalido();
        }

        if (this.bloqueada) {
            throw new ContaBloqueada();
        }

        if (valor > this.saldo) {
            const falta = valor - this.saldo;
            throw new SaldoInsuficiente(falta);
        }

        if (this.saquesDia + valor > this.limiteDiario) {
            throw new LimiteDiarioExcedido();
        }

        this.saldo -= valor;
        this.saquesDia += valor;

        console.log(`Saque de R$ ${valor.toFixed(2)} realizado!`);
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    bloquear(): void {
        this.bloqueada = true;
    }

    desbloquear(): void {
        this.bloqueada = false;
    }

    reiniciarLimiteDiario(): void {
        this.saquesDia = 0;
    }

    // Getters

    getNumero(): number {
        return this.numero;
    }

    getAgencia(): number {
        return this.agencia;
    }

    getDataAbertura(): Date {
        return this.dataAbertura;
    }

    getSaldo(): number {
        return this.saldo;
    }

    getBloqueada(): boolean {
        return this.bloqueada;
    }

    getLimiteDiario(): number {
        return this.limiteDiario;
    }

    getSaquesDia(): number {
        return this.saquesDia;
    }

    getTitular(): Cliente {
        return this.titular;
    }

    // Setters

    setNumero(numero: number): void {
        this.numero = numero;
    }

    setAgencia(agencia: number): void {
        this.agencia = agencia;
    }

    setDataAbertura(dataAbertura: Date): void {
        this.dataAbertura = dataAbertura;
    }

    setSaldo(saldo: number): void {
        if (saldo < 0 || !Number.isFinite(saldo)) {
            throw new ValorInvalido();
        }

        this.saldo = saldo;
    }

    setBloqueada(bloqueada: boolean): void {
        this.bloqueada = bloqueada;
    }

    setLimiteDiario(limiteDiario: number): void {
        if (limiteDiario <= 0 || !Number.isFinite(limiteDiario)) {
            throw new ValorInvalido();
        }

        this.limiteDiario = limiteDiario;
    }

    setSaquesDia(saquesDia: number): void {
        if (saquesDia < 0 || !Number.isFinite(saquesDia)) {
            throw new ValorInvalido();
        }

        this.saquesDia = saquesDia;
    }

    setTitular(titular: Cliente): void {
        this.titular = titular;
    }
}