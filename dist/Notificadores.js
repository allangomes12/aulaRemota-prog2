export class SMS {
    enviar(mensagem, cliente) {
        console.log(`SMS enviado para ${cliente.getNome()}: ${mensagem}`);
    }
}
export class Email {
    enviar(mensagem, cliente) {
        console.log(`E-mail enviado para ${cliente.getNome()}: ${mensagem}`);
    }
}
export class Aplicativo {
    enviar(mensagem, cliente) {
        console.log(`Notificação no aplicativo de ${cliente.getNome()}: ${mensagem}`);
    }
}
