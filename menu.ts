import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaPoupanca } from "./src/model/ContaPoupança";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaController } from "./src/controller/ContaController";
export function main() {
    
    const contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino, numeroOrigem: number;
    let titular: string;
    const tiposContas = [`Conta Corrente`, `Conta Poupanca`];

  
   /*const conta: Conta = new Conta(1, 123, 1, " Jorel", 10000);
    conta.visualizar();
    conta.sacar(12345); 
    conta.visualizar();
    conta.depositar(1234);
    conta.visualizar();*/ 

    const contaPoupanca: ContaPoupanca = new ContaPoupanca(2, 123, 1, " Mario", 10000, 12);
    contaPoupanca.visualizar();
    contaPoupanca.sacar(12345);
    contaPoupanca.visualizar();
    contaPoupanca.depositar(1234);
    contaPoupanca.visualizar(); 

    const contacorrente: ContaCorrente = new ContaCorrente(3, 123, 1, "Tiana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();



    while (true) {  
        console.log(colors.bg.black, colors.fg.bluestrong)
        console.log("*******************************************************");
        console.log("*                                                     *");
        console.log("*                      KN BANK                        *");
        console.log("*                                                     *");
        console.log("*******************************************************");
        console.log("*                                                     *");
        console.log("*            1 - Criar Conta                          *");
        console.log("*            2 - Listar todas as Contas               *");
        console.log("*            3 - Buscar por numero da conta           *");
        console.log("*            4 - Atualizar Dados da Conta             *");
        console.log("*            5 - Apagar Conta                         *");
        console.log("*            6 - Sacar                                *");
        console.log("*            7 - Depositar                            *");
        console.log("*            8 - Transferir                           *");
        console.log("*            9 - Pix                                  *");
        console.log("*           10- Sair                                  *");                              
        console.log("*                                                     *");
        console.log("*******************************************************",
        colors.reset);
       
    

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");   

        if (opcao == 10) {
            console.log(colors.fg.bluestrong,"\nKN BANK - Onde o seu dinheiro é valorizado!");

            sobre();
            process.exit(0);

        }


        
    switch (opcao) {
    
        case 1:
            console.log(colors.fg.bluestrong,"\n\nCriar Conta\n\n");

            console.log("Digite o Numero da agencia: ");
            agencia = readlinesync.questionInt("");

            console.log("Digite o Nome do titular da conta: ");
            titular = readlinesync.question("");

            console.log("Digite o tipo da conta: ");
            tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) +1;

            console.log("\nDigite o Saldo da conta (R$): ");
            saldo = readlinesync.questionFloat("");

    switch(tipo){
        
        case 1:
            console.log("Digite o limite da Conta (R$): ");
            limite = readlinesync.questionFloat("");
            contas.cadastrar(  new ContaCorrente(contas.gerarNumero(), agencia,
            tipo, titular,saldo, limite));

                break;
        case 2: 
            console.log("Digite o dia do aniversario da conta poupanca: ");
        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as Contas\n\n");

                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar dados da Conta - por número\n\n");
                
                console.log("Digite o numero da conta")
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);
               
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n");
                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

            if (conta != null){

                console.log("digite o numero da agencia: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o numero do titular da conta: ");
                titular = readlinesync.question("");

                tipo = conta.tipo;

                console.log("Digite o saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");


            switch (tipo) {
                    case 1:
                console.log("Digite o limite da conta (R$): ");
                limite = readlinesync.questionFloat("");
                contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
               break;

            case 2:
                 console.log("Digite o dia do aniversario da conta poupanca: ");
                 aniversario = readlinesync.questionInt("")   
                 contas.atualizar( new ContaPoupanca(numero, agencia, tipo, titular, saldo,
                 aniversario))

                  break;
                    }

                } else {
                    console.log("A conta numero: " + numero + 
                        "não foi encontrada");

                } 
                
                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong,"\n\nApagar Conta\n\n");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);
                
                keyPress()
                break;
            case 6:
                 console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
            
                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Saque (R$): ");
                valor = readlinesync.questionFloat("");
                contas.sacar(numero, valor);

                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
            
                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Saque (R$): ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                console.log("Digite o número da Conta de Origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o número da Conta de Destino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("\nDigite o valor do Depósito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            case 9:
                console.log("Realizar Pix:");
                console.log("Conta de Origem: ");
                let origem = readlinesync.questionInt(); 
                console.log("Conta de Destino: ");
                let destino = readlinesync.questionInt();
                console.log("Valor: ");
                let valorPix = readlinesync.questionFloat();
                contas.pix(origem, destino, valorPix);
    break;   
            default:
                console.log(colors.fg.redstrong,"\nOpção Inválida!\n");
                
                keyPress()
                break;
        }
    }

}



export function sobre(): void {
    console.log("\n*********************************************************");
    console.log("* Projeto Desenvolvido por: Kaik Nascimento Silva Lira  *");
    console.log("* github: https://github.com/Kaik0007/contaBancaria.git *");
    console.log("*********************************************************");
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();