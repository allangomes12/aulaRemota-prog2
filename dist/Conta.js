import { ValorInvalido, ContaBloqueada, SaldoInsuficiente, LimiteDiarioExcedido } from "./Excecoes.js";
export class Conta {
    numero;
    agencia;
    dataAbertura;
    saldo;
    bloqueada = false;
    limiteDiario;
    saquesDia = 0;
    titular;
    constructor(numero, agencia, saldo, titular, limiteDiario = 500) {
        this.numero = numero;
        this.agencia = agencia;
        this.saldo = saldo;
        this.titular = titular;
        this.limiteDiario = limiteDiario;
        this.dataAbertura = new Date();
        titular.adicionarConta(this);
    }
    // Operações bancárias
    depositar(valor) {
        if (valor <= 0 || !Number.isFinite(valor)) {
            throw new ValorInvalido();
        }
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado!`);
    }
    sacar(valor) {
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
    consultarSaldo() {
        return this.saldo;
    }
    bloquear() {
        this.bloqueada = true;
    }
    desbloquear() {
        this.bloqueada = false;
    }
    reiniciarLimiteDiario() {
        this.saquesDia = 0;
    }
    // Getters
    getNumero() {
        return this.numero;
    }
    getAgencia() {
        return this.agencia;
    }
    getDataAbertura() {
        return this.dataAbertura;
    }
    getSaldo() {
        return this.saldo;
    }
    getBloqueada() {
        return this.bloqueada;
    }
    getLimiteDiario() {
        return this.limiteDiario;
    }
    getSaquesDia() {
        return this.saquesDia;
    }
    getTitular() {
        return this.titular;
    }
    // Setters
    setNumero(numero) {
        this.numero = numero;
    }
    setAgencia(agencia) {
        this.agencia = agencia;
    }
    setDataAbertura(dataAbertura) {
        this.dataAbertura = dataAbertura;
    }
    setSaldo(saldo) {
        if (saldo < 0 || !Number.isFinite(saldo)) {
            throw new ValorInvalido();
        }
        this.saldo = saldo;
    }
    setBloqueada(bloqueada) {
        this.bloqueada = bloqueada;
    }
    setLimiteDiario(limiteDiario) {
        if (limiteDiario <= 0 || !Number.isFinite(limiteDiario)) {
            throw new ValorInvalido();
        }
        this.limiteDiario = limiteDiario;
    }
    setSaquesDia(saquesDia) {
        if (saquesDia < 0 || !Number.isFinite(saquesDia)) {
            throw new ValorInvalido();
        }
        this.saquesDia = saquesDia;
    }
    setTitular(titular) {
        this.titular = titular;
    }
}
