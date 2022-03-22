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
        console.log(`Olá, ${name}! Você tem ${age} anos.`)
    }
    printMessage()