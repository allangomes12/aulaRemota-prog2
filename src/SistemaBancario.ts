import { Conta } from "./Conta.js";
import type { CanalNotificacao } from "./CanalNotificacao.js";

export class SistemaBancario {

    realizarSaque(
        conta: Conta,
        valor: number,
        canal: CanalNotificacao
    ): void {

        try {
            conta.sacar(valor);

            console.log("Operação realizada com sucesso!");

        } catch (erro) {

            if (erro instanceof Error) {
                console.log(`ERRO: ${erro.message}`);

                canal.enviar(
                    erro.message,
                    conta.getTitular()
                );
            }
        }
    }

    realizarDeposito(conta: Conta, valor: number): void {

        try {
            conta.depositar(valor);

        } catch (erro) {

            if (erro instanceof Error) {
                console.log(`ERRO: ${erro.message}`);
            }
        }
    }

    consultarSaldo(conta: Conta): void {

        console.log(
            `Saldo de ${conta.getTitular().getNome()}: R$ ${conta.consultarSaldo().toFixed(2)}`
        );
    }
}