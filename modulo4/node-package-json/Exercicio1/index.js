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

        if (!name) {
            console.log("Esperava 2 parâmetros e recebi nenhum.")
            return false
        } else if (name && !age) {
            console.log("Esperava 2 parâmetros e só recebi um.")
            return false
        }

        console.log(`Olá, ${name}! Você tem ${age} anos.`);
    };
    printMessage();

// c) c) Altere o programa acima para que mostre também a sua idade 
//daqui a sete anos: "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"
    const printNewMessage = () => {
        const name = process.argv[2];
        const age = process.argv[3];

        if (!name) {
            console.log("Esperava 2 parâmetros e recebi nenhum.")
            return false
        } else if (name && !age) {
            console.log("Esperava 2 parâmetros e só recebi um.")
            return false
        }

        const futureAge = Number(age) + 7;
        console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${futureAge}.`);
    };
    printNewMessage();
