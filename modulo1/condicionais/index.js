/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS*/

    // Questão 1.

        // Itens a, b e c.

            /*
                O código verifica se o número informada pelo usuário é par. Caso seja par, 
                imprime no console a mensagem "Passou no teste.", caso o número seja ímpar,
                imprime "Não passou no teste.".
            */

    // Questão 2.

        // Item a.

            /*
                O código informa o preço da fruta informada pelo usuário no prompt.
            */

        // Item b.

            /* Será impresso no console:
                O preço da fruta Maçã é R$ 2.25
            */

        // Item c.

            /* Será impresso no console:
                O preço da fruta Pêra é R$ 5
            */

    // Questão 3.

        // Item a.

            /*
                A primeira linha converte o valor do tipo string (resultado do prompt)
                em um valor do tipo number.
            */

        // Iten b e c.

            /*
                Se o usuário digitar o valor 10, será impresso no console:
                    Esse número passou no teste
                    Essa mensagem é secreta!!!
                Se o usuário digitar o valor -10, ocorrerá um erro pois, como a condição do
                if é falsa, a variável mensagem não será declarada. Afinal, a mesma está 
                definida apenas dentro do escopo local da condicional if e está sendo
                chamada fora dele.          
            */
/* EXERCÍCIOS DE ESCRITA DE CÓDIGOS*/

    // Questão 1.

        // Itens a e b.

            const idade = Number(prompt("Por favor, informe a sua idade:"));

        // Item c.

            if(idade >= 18){
                console.log("Você pode dirigir.");
            }else{
                console.log("Você nãopode dirigir.");
            }

    // Questão 2.

        let turno = prompt("Por favor, informe o seu turno de estudo da seguinte forma: M (caso matutino), V (caso vespertino) ou N (caso noturno).");
        if(turno === "M"){
            console.log("Bom Dia!");
        }else if(turno === "V"){
            console.log("Boa Tarde!");
        }else{
            console.log("Boa Noite!");
        };

    // Questão 3.

        turno = prompt("Por favor, informe o seu turno de estudo da seguinte forma: M (caso matutino), V (caso vespertino) ou N (caso noturno).");

        switch (turno){
            case "M":
                console.log("Bom Dia!");
                break;
            case "V":
                console.log("Boa Tarde!");
                break;
            case "N":
                console.log("Boa noite!");
                break;
            default:
                console.log("Você digitou errado! Dê um F5 e leia o enunciado com atenção ;)");
                break;
        };

    // Questão 4.

        const generoFilme = prompt("Qual o gênero do filme?");
        const precoFilme = Number(prompt("Qual o valor do ingresso para esse filme?"));

        const vamosAssistir = (generoFilme.toLowerCase() === "fantasia") && (precoFilme < 15);

        if(vamosAssistir){
            console.log("Bom filme!");
        }else{
            console.log("Escolha outro filme :(");
        };

