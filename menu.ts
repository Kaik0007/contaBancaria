import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaPoupanca } from "./src/model/ContaPoupança";
import { ContaCorrente } from "./src/model/ContaCorrente";

export function main() {

    let opcao: number;

  
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

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as Contas\n\n");

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar dados da Conta - por número\n\n");
               
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n");
                
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,"\n\nApagar Conta\n\n");
                
                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,"\n\nSaque\n\n");
                
                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,"\n\nDepósito\n\n");
                
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,"\n\nTransferência \n\n");
                
                keyPress()
                break;
            case 9:
                console.log(colors.fg.whitestrong,"\n\nPix\n\n");
                
                keyPress()
                break;    
            default:
                console.log(colors.fg.redstrong,"\nOpção Inválida!\n");
                
                keyPress()
                break;
        }
    }

}



export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("*Projeto Desenvolvido por: Kaik Nascimento Silva Lira *");
    console.log("*github: https://github.com/Kaik0007/contaBancaria.git*");
    console.log("*******************************************************");
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();