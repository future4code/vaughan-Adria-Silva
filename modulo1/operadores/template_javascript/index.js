/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO */

    //Questão 1.
        /*
            Será impresso no console:
            a. false
            b. false
            c. true
            d. boolean
        */

    //Questão 2.
        /*
            O problema do código é que tudo aquilo que é enviado pelo usuário
            no prompt é uma string. Assim, caso não seja usado a função Number()
            para transformar o dado de entrada em um número, o resultado de soma
            será dado pela a concatenação das variáveis primeriNumero e segundoNumero.
        */

    //Questão 3.
        /*
            let primeiroNumero = Number(prompt("Digite um numero!"));
            let segundoNumero = Number(prompt("Digite outro numero!"));

            const soma = primeiroNumero + segundoNumero;

            console.log(soma);
        */



/* EXERCÍCIOS DE ESCRITA DE CÓDIGO */

    //Questão 1.
        let idadeUser = Number(prompt("Qual é a sua idade?"));
        const idadeFriend = Number(prompt("Qual é a idade de seu/sua melhor amigo(a)?"));

        console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUser > idadeFriend);
        console.log("A diferença entre idades é:", idadeUser - idadeFriend);

    //Questão 2.
        const numPar = Number(prompt("Por favor, insira um número par:"));
        console.log("Resto da divisão de", numPar, "por 2:", numPar % 2);

        /** O resto da divisão de um número par por 2 sempre será 0 e o
         resultado será sempre 1 caso o número seja ímpar.
         */
    
    //Questão 3.
        idadeUser = Number(prompt("Qual é a sua idade?"));
        const meses = idadeUser * 12;
        const dias =  idadeUser * 365;
        const horas = dias * 24;

        console.log("Você viveu", meses,"meses.");
        console.log("Você viveu", dias,"dias.");
        console.log("Você viveu", horas,"horas.");
    
    //Questão 4.
        const num1 = Number(prompt("Por favor, insira um número qualquer:"));
        const num2 = Number(prompt("Por favor, insira mais um número qualquer:"));

        const comparacao1 = num1 > num2;
        const comparacao2 = num1 === num2;
        const comparacao3 = (num1 % num2) === 0;
        const comparacao4 = (num2 % num1) === 0;

        console.log("O primeiro numero é maior que segundo?", comparacao1);
        console.log("O primeiro numero é igual ao segundo?", comparacao2);
        console.log("O primeiro numero é divisível pelo segundo?", comparacao3);
        console.log("O segundo numero é divisível pelo primeiro?", comparacao4);