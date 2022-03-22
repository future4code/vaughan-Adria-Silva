// Exercício 1

// a) Como fazemos para acessar os parâmetros passados na linha de comando 
//para o Node?

    //Resposta: process.argv[2], process.argv[3], o índice depende de 
    //qual algumento deseja acessar.

// b) Crie um programa que receba seu nome e sua idade. 
// Após receber estes valores, imprima no console uma mensagem que siga 
//a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."

    // Resposta:
    const printMessage = () => {
        const name = process.argv[2];
        const age = process.argv[3];
        console.log(`Olá, ${name}! Você tem ${age} anos.`);
    };
    printMessage();

// c) c) Altere o programa acima para que mostre também a sua idade 
//daqui a sete anos: "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
    const printNewMessage = () => {
        const name = process.argv[2];
        const age = process.argv[3];
        const futureAge = Number(age) + 7;
        console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${futureAge}.`);
    };
    printNewMessage();

// Exercício 2

//Crie uma aplicação Node que recebe uma string representando uma operação 
//matemática e dois valores numéricos. O retorno deverá ser o resultado da 
//operação selecionada utilizando os 2 valores fornecidos.

    const mathOperation = () => {
        const operation  = process.argv[2];
        const firstNumber  = Number(process.argv[3]);
        const secondNumber  = Number(process.argv[4]);

        let result = 0
        switch (operation) {
            case "add":
                result = firstNumber + secondNumber;
                break;
            case "sub":
                result = firstNumber - secondNumber;
                break;
            case "mult":
                result = firstNumber * secondNumber;
                break;
            default:
                result = firstNumber / secondNumber;
                break; 
        }

        console.log("Resposta: ", result);
        
    }