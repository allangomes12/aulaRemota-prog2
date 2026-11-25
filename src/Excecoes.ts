export class ValorInvalido extends Error {
    constructor() {
        super("Valor inválido!");
        this.name = "ValorInvalido";
    }
}

export class ContaBloqueada extends Error {
    constructor() {
        super("A conta está bloqueada!");
        this.name = "ContaBloqueada";
    }
}

export class SaldoInsuficiente extends Error {
    private falta: number;

    constructor(falta: number) {
        super(`Saldo insuficiente! Faltam R$ ${falta.toFixed(2)}.`);
        this.name = "SaldoInsuficiente";
        this.falta = falta;
    }

    getFalta(): number {
        return this.falta;
    }

    setFalta(falta: number): void {
        this.falta = falta;
        this.message = `Saldo insuficiente! Faltam R$ ${falta.toFixed(2)}.`;
    }
}

export class LimiteDiarioExcedido extends Error {
    constructor() {
        super("Limite diário de saque excedido!");
        this.name = "LimiteDiarioExcedido";
    }
}