import type { Cliente } from "./Cliente.js";

export interface CanalNotificacao {
    enviar(mensagem: string, cliente: Cliente): void;
}