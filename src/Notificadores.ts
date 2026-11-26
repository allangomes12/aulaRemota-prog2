import { Notificador } from "./Notificador.js";
import type { Cliente } from "./Cliente.js";

export class SMS extends Notificador {

    enviar(mensagem: string, cliente: Cliente): void {
        console.log(`SMS enviado para ${cliente.getNome()}: ${mensagem}`);
    }
}

export class Email extends Notificador {

    enviar(mensagem: string, cliente: Cliente): void {
        console.log(`E-mail enviado para ${cliente.getNome()}: ${mensagem}`);
    }
}

export class Aplicativo extends Notificador {

    enviar(mensagem: string, cliente: Cliente): void {
        console.log(`Notificação no aplicativo de ${cliente.getNome()}: ${mensagem}`);
    }
}