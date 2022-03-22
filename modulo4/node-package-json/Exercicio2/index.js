// Exercício 2

//Crie uma aplicação Node que recebe uma string representando uma operação 
//matemática e dois valores numéricos. O retorno deverá ser o resultado da 
//operação selecionada utilizando os 2 valores fornecidos.

    const mathOperation = () => {
        const operation  = process.argv[2];
        const firstNumber  = Number(process.argv[3]);
        const secondNumber  = Number(process.argv[4]);

        if (!operation) {
            console.log("Esperava 3 parâmetros e recebi nenhum.")
            return false
        } else if (operation && !firstNumber) {
            console.log("Esperava 3 parâmetros e só recebi um.")
            return false
        } else if (operation && firstNumber && !secondNumber) {
            console.log("Esperava 3 parâmetros e só recebi 2.")
            return false
        }

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

    mathOperation();