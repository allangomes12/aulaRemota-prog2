import type { Cliente } from "./Cliente.js";
import type { CanalNotificacao } from "./CanalNotificacao.js";

export class SMS implements CanalNotificacao {
    enviar(mensagem: string, cliente: Cliente): void {
        console.log(`SMS enviado para ${cliente.getNome()}: ${mensagem}`);
    }
}

export class Email implements CanalNotificacao {
    enviar(mensagem: string, cliente: Cliente): void {
        console.log(`E-mail enviado para ${cliente.getNome()}: ${mensagem}`);
    }
}

export class Aplicativo implements CanalNotificacao {
    enviar(mensagem: string, cliente: Cliente): void {
        console.log(`Notificação no aplicativo de ${cliente.getNome()}: ${mensagem}`);
    }
}