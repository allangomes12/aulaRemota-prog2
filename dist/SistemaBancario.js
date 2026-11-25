export class SistemaBancario {
    realizarSaque(conta, valor, canal) {
        try {
            conta.sacar(valor);
            console.log("Operação realizada com sucesso!");
        }
        catch (erro) {
            if (erro instanceof Error) {
                console.log(`ERRO: ${erro.message}`);
                canal.enviar(erro.message, conta.getTitular());
            }
        }
    }
    realizarDeposito(conta, valor) {
        try {
            conta.depositar(valor);
        }
        catch (erro) {
            if (erro instanceof Error) {
                console.log(`ERRO: ${erro.message}`);
            }
        }
    }
    consultarSaldo(conta) {
        console.log(`Saldo de ${conta.getTitular().getNome()}: R$ ${conta.consultarSaldo().toFixed(2)}`);
    }
}
