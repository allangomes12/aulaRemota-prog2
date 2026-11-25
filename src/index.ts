import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { SistemaBancario } from "./SistemaBancario.js";
import { SMS, Email, Aplicativo } from "./Notificadores.js";


const cliente1 = new Cliente(
    "Allan",
    "11111111111",
    "Recife",
    2500
);

const cliente2 = new Cliente(
    "Marta",
    "22222222222",
    "Olinda",
    3500
);


const banco = new SistemaBancario();


const sms = new SMS();
const email = new Email();
const aplicativo = new Aplicativo();


const conta1 = new Conta(1, 100, 1000, cliente1);
const conta2 = new Conta(2, 100, 800, cliente2);

const conta3 = new Conta(3, 100, 500, cliente1);
const conta4 = new Conta(4, 100, 500, cliente2);

const conta5 = new Conta(5, 100, 500, cliente1);
const conta6 = new Conta(6, 100, 500, cliente2);

const conta7 = new Conta(7, 100, 100, cliente1);
const conta8 = new Conta(8, 100, 50, cliente2);

const conta9 = new Conta(9, 100, 1000, cliente1, 200);
const conta10 = new Conta(10, 100, 1000, cliente2, 200);



console.log("\n--- SAQUES COM SUCESSO ---");

banco.realizarSaque(conta1, 100, sms);
banco.realizarSaque(conta2, 200, email);


console.log("\n--- VALORES INVALIDOS ---");

banco.realizarSaque(conta3, -50, sms);
banco.realizarSaque(conta4, 0, aplicativo);


console.log("\n--- CONTAS BLOQUEADAS ---");

conta5.bloquear();
conta6.bloquear();

banco.realizarSaque(conta5, 100, email);
banco.realizarSaque(conta6, 100, aplicativo);


console.log("\n--- SALDO INSUFICIENTE ---");

banco.realizarSaque(conta7, 150, sms);
banco.realizarSaque(conta8, 100, email);


console.log("\n--- LIMITE DIARIO ---");

// Primeiro cliente

banco.realizarSaque(conta9, 150, sms);
banco.realizarSaque(conta9, 100, aplicativo);


banco.realizarSaque(conta10, 150, email);
banco.realizarSaque(conta10, 100, sms);



console.log("\n--- DEPOSITOS ---");

banco.realizarDeposito(conta1, 300);
banco.realizarDeposito(conta2, 500);



console.log("\n--- CONSULTA DE SALDOS ---");

const contas: Conta[] = [
    conta1, conta2, conta3, conta4, conta5,
    conta6, conta7, conta8, conta9, conta10
];

for (let i = 0; i < contas.length; i++) {

    console.log("Conta:", contas[i].getNumero());

    console.log(
        "Titular:", contas[i].getTitular().getNome()
    );

    console.log(
        "Saldo: R$ " + contas[i].getSaldo().toFixed(2)
    );

    console.log("----------------------");
}


console.log("\n--- CLIENTES CADASTRADOS ---");

const clientes: Cliente[] = [cliente1, cliente2];

for (let i = 0; i < clientes.length; i++) {

    console.log("Nome:", clientes[i].getNome());
    console.log("CPF:", clientes[i].getCpf());
    console.log("Endereço:", clientes[i].getEndereco());
    console.log("Renda:", clientes[i].getRenda());

    console.log(
        "Quantidade de contas:",
        clientes[i].getContas().length
    );

    console.log("----------------------");
}


for (let i = 0; i < clientes.length; i++) {

    console.log("Cliente:", clientes[i].getNome());

    const contasCliente = clientes[i].getContas();

    for (let j = 0; j < contasCliente.length; j++) {

        console.log(
            "Número:", contasCliente[j].getNumero()
        );

        console.log(
            "Agência:", contasCliente[j].getAgencia()
        );

        console.log(
            "Saldo: R$ " + contasCliente[j].getSaldo().toFixed(2)
        );

        console.log("----------------------");
    }
}
