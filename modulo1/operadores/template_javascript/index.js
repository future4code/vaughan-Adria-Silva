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

/* DESAFIOS */

    //Questão 1.
        //Item a.
            let temp = 37;
            let farenheitParaKelvin = (temp - 32) * (5 / 9) + 273.15;
            console.log("77°F equivale à", farenheitParaKelvin, "K.");

        //Item b.
            temp = 80
            let celsiusParaFarenheit = temp * (9 / 5) + 32;
            console.log("80°C equivale à", celsiusParaFarenheit, "°F.");

        //Item c.
            temp = 30
            celsiusParaFarenheit = temp * (9 / 5) + 32;
            console.log("30°C equivale à", celsiusParaFarenheit, "°F.");

            temp = celsiusParaFarenheit //temp está em °F
            farenheitParaKelvin = (temp - 32) * (5 / 9) + 273.15;
            console.log("30°C equivale à", farenheitParaKelvin, "K.");
        //Item d.
            temp = Number(prompt("Insira uma temperatura em °C que você deseja saber quanto é em °F e em K:"))
            celsiusParaFarenheit = temp * (9 / 5) + 32;
            console.log( temp, "°C equivale à", celsiusParaFarenheit, "°F.");

            const tempF = celsiusParaFarenheit
            farenheitParaKelvin = (tempF - 32) * (5 / 9) + 273.15;
            console.log(temp, "°C equivale à", farenheitParaKelvin, "K.");
    
    //Questão 2.
        //Item a.
            const custoKwh = 0.05;
            let consumoKwh = 280;

            let contaMensal = custoKwh * consumoKwh * 30;
            console.log("Uma residência que consome", consumoKwh, "KWh paga R$", contaMensal, "por mês.");
        
        //Item b.
            let contaMensalDesconto = contaMensal * 85 / 100;
            console.log("Com 15% de desconto, a residência pagará R$", contaMensalDesconto);

    //Questão 3.
        //Item a.
            const pesoLb = 20;
            const lbParaKg = pesoLb * 0.453592;
            
            console.log(pesoLb, "lb equivalem a", lbParaKg, "kg");
        
        //Item b.
            const pesoOz = 10;
            const ozParaKg = pesoOz * 0.0283495;
        
            console.log(pesoOz, "oz equivalem a", ozParaKg, "kg");
        //Item c.
            const distanciaMilha = 100;
            const miParaM = distanciaMilha * 1609.34;
            
            console.log(distanciaMilha, "mi equivalem a", miParaM , "m");
        
        //Item d.
            const distanciaFt = 50;
            const ftParaM = distanciaFt * 0.3048;
            
            console.log(distanciaFt, "ft equivalem a", ftParaM , "m");

        //Item e.
        const volumeGal = 103.56;
        const galParaL = volumeGal * 3.78541;
        
        console.log(volumeGal, "gal equivalem a", galParaL , "L");

        //Item f.
        const volumeXic = 450;
        const xicParaL = volumeXic * 0.16667;
        
        console.log(volumeXic, "xic equivalem a", xicParaL , "L");



