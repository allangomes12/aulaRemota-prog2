import type { Cliente } from "./Cliente.js";
import type { CanalNotificacao } from "./CanalNotificacao.js";

export abstract class Notificador implements CanalNotificacao {

    abstract enviar(mensagem: string, cliente: Cliente): void;

}