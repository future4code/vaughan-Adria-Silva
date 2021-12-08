///* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS */
//
//    // Questão 1.
//
//        // Itens a, b e c.
//
//            /*
//                O código verifica se o número informada pelo usuário é par. Caso seja par, 
//                imprime no console a mensagem "Passou no teste.", caso o número seja ímpar,
//                imprime "Não passou no teste.".
//            */
//
//    // Questão 2.
//
//        // Item a.
//
//            /*
//                O código informa o preço da fruta informada pelo usuário no prompt.
//            */
//
//        // Item b.
//
//            /* Será impresso no console:
//                O preço da fruta Maçã é R$ 2.25
//            */
//
//        // Item c.
//
//            /* Será impresso no console:
//                O preço da fruta Pêra é R$ 5
//            */
//
//    // Questão 3.
//
//        // Item a.
//
//            /*
//                A primeira linha converte o valor do tipo string (resultado do prompt)
//                em um valor do tipo number.
//            */
//
//        // Iten b e c.
//
//            /*
//                Se o usuário digitar o valor 10, será impresso no console:
//                    Esse número passou no teste
//                    Essa mensagem é secreta!!!
//                Se o usuário digitar o valor -10, ocorrerá um erro pois, como a condição do
//                if é falsa, a variável mensagem não será declarada. Afinal, a mesma está 
//                definida apenas dentro do escopo local da condicional if e está sendo
//                chamada fora dele.          
//            */
///* EXERCÍCIOS DE ESCRITA DE CÓDIGOS */
//
//    // Questão 1.
//
//        // Itens a e b.
//
//            const idade = Number(prompt("Por favor, informe a sua idade:"));
//
//        // Item c.
//
//            if(idade >= 18){
//                console.log("Você pode dirigir.");
//            }else{
//                console.log("Você nãopode dirigir.");
//            }
//
//    // Questão 2.
//
//        let turno = prompt("Por favor, informe o seu turno de estudo da seguinte forma: M (caso matutino), V (caso vespertino) ou N (caso noturno).");
//        if(turno === "M"){
//            console.log("Bom Dia!");
//        }else if(turno === "V"){
//            console.log("Boa Tarde!");
//        }else{
//            console.log("Boa Noite!");
//        };
//
//    // Questão 3.
//
//        turno = prompt("Por favor, informe o seu turno de estudo da seguinte forma: M (caso matutino), V (caso vespertino) ou N (caso noturno).");
//
//        switch (turno){
//            case "M":
//                console.log("Bom Dia!");
//                break;
//            case "V":
//                console.log("Boa Tarde!");
//                break;
//            case "N":
//                console.log("Boa noite!");
//                break;
//            default:
//                console.log("Você digitou errado! Dê um F5 e leia o enunciado com atenção ;)");
//                break;
//        };
//
//    // Questão 4.
//
//        const generoFilme = prompt("Qual o gênero do filme?");
//        const precoFilme = Number(prompt("Qual o valor do ingresso para esse filme?"));
//
//        const vamosAssistir = (generoFilme.toLowerCase() === "fantasia") && (precoFilme < 15);
//
//        if(vamosAssistir){
//            console.log("Bom filme!");
//        }else{
//            console.log("Escolha outro filme :(");
//        };
//
///* DESAFIOS */
//
//    // Questão 1.
//
//        if(vamosAssistir){
//            const lanche = prompt("Qual lanchinho você quer comprar para comer no cinema?");
//            console.log(`Aproveite o(a) seu(sua) ${lanche}.`);
//
//            console.log("Bom filme!");
//        }else{
//            console.log("Escolha outro filme :(");
//        };
//
//    // Questão 2.

        const nome = prompt("Por favor, informe o seu nome completo:");
        const tipoJogo = prompt("Por favor, informe o tipo do jogo. (IN para internacional ou DO para doméstico").toUpperCase();
        const etapaJogo = prompt("Por favor, informe a etapa do jogo. (SF para semi-final ou DT para decisão de 3° lugar ou FI para final)").toUpperCase();
        const categoriaJogo = Number(prompt("Por favor, informe a categoria. (1 ou 2 ou 3 ou 4"));
        const numeroIngressos = Number(prompt("Por favor, informe quantos ingressos você quer:"));

        const tipoExtenso = tipo => {

            switch (tipo){
                case "IN":
                    return "Internacional";
                    break;
                case "DO":
                    return "Doméstico";
                    break;
                default:
                    return "Deu Erro";
                    break;
            }
        }

        const etapaExtenso = etapa => {
            switch (etapa){
                case "SF":
                    return "Semi-final";
                    break;
                case "DT":
                    return "Decisão do 3º lugar";
                    break;
                case "FI":
                    return "Final"
                default:
                    return "Deu Erro";
                    break;
            }
        }

        const valorIngresso = (etapa, categoria) => {

            if(etapa === "SF"){
                switch (categoria){
                    case 1:
                        return 1320;
                        break;
                    case 2:
                        return 880;
                        break;
                    case 3:
                        return 550;
                        break;
                    case 4:
                        return 220;
                        break;
                    default:
                        return "Deu erro - SF";
                        break;
                }
            }else if(etapa === "DT"){
                switch (categoria){
                    case 1:
                        return 660;
                        break;
                    case 2:
                        return 440;
                        break;
                    case 3:
                        return 330;
                        break;
                    case 4:
                        return 170;
                        break;
                    default:
                        return "Deu erro - DT";
                        break;
                }
            }else if(etapa === "FI"){
                switch (categoria){
                    case 1:
                        return 1980;
                        break;
                    case 2:
                        return 1320;
                        break;
                    case 3:
                        return 880;
                        break;
                    case 4:
                        return 330;
                        break;
                    default:
                        return "Deu erro - FI";
                        break;
                }
            }           
        }

        console.log("---Dados da Compra---");
        console.log(`Nome do cliente: ${nome}`);
        console.log(`Tipo do jogo: ${tipoExtenso(tipoJogo)}`);
        console.log(`Etapa do jogo: ${etapaExtenso(etapaJogo)}`);
        console.log(`Categoria: ${categoriaJogo}`);
        console.log(`Quantidade de ingressos: ${numeroIngressos} ingresso(s)`);
        console.log("---Valores---");
        
        if(tipoJogo === "DO"){
            console.log(`Valor do ingresso: R$ ${valorIngresso(etapaJogo, categoriaJogo)}`);
            
            const custoTotal = valorIngresso(etapaJogo, categoriaJogo) * numeroIngressos;
            console.log(`Valor total: RS ${custoTotal}`);

        }else if(tipoJogo === "IN"){
            const ingressoDolar = (valorIngresso(etapaJogo, categoriaJogo) * 4.1).toFixed();

            console.log(`Valor do ingresso: R$ ${ingressoDolar}`);
            
            const custoTotal = ingressoDolar * numeroIngressos;
            console.log(`Valor total: U$ ${custoTotal}`);

        }else{
            console.log("Deu erro")
        }
        

