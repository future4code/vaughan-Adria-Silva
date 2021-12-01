/** EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO */
    // Questão 1.
        /* As mensagens que serão exibidas no console serão:
            
            a. undefined
            b. null
            c. 11
            d. 3
            e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
            f. 9
        
        */

    // Questão 2.
        /* O valor impresso será:
            
            SUBI NUM ÔNIBUS EM MIRROCOS

        */


/** EXERCÍCIOS DE ESCRITA DE CÓDIGO */
    // Questão 1.

        const userName = prompt("Por favor, informe seu nome para cadastro:");
        const userEmail = prompt("Por favor, informe seu email para cadastro:");

        const nomeCadastrado = userName.trim().toUpperCase();
        const emailCadastrado = userEmail.trim().toLowerCase();

        const sucesso = `O e-mail ${emailCadastrado} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeCadastrado}!`;

        console.log(sucesso);

    // Questão 2.

        const listaComidas = ["pizza", "pastel", "empada", "churros", "batata frita"];

            // Item a.

                console.log(listaComidas);

            // Item b.

                console.log(`Essas são as minhas comidas preferidas:\n${listaComidas[0]}\n${listaComidas[1]}\n${listaComidas[2]}\n${listaComidas[3]}\n${listaComidas[4]}`);

            // Item c.
                const userFood = prompt("Qual a sua comida preferida?");

                listaComidas[1] = userFood;
                console.log(`Adicionando a sua comida à minha lista: ${listaComidas}.`);

    // Questão 3.

            // Item a.

                const listaDeTarefas = [];

            // Item b.

                listaDeTarefas[0] = prompt("Por favor, informe uma das tarefas que você precisa realizar hoje:");
                listaDeTarefas[1] = prompt("Por favor, informe outra tarefa que você precisa realizar hoje:");
                listaDeTarefas[2] = prompt("Por favor, informe mais uma tarefa que você precisa realizar hoje:");
            
            // Item c.

                console.log(listaDeTarefas);

            // Item d.

                const numTarefa = prompt("Por favor, digite o número da tarefa que você já realizou, de 0 a 2:");

            // Item e.

                const removeTarefa = listaDeTarefas.splice(numTarefa, 1);

            // Item f.

                console.log(listaDeTarefas);

/** DESAFIOS */



    // Questão 1.

        const frase = prompt("Por favor, digite uma frase:");
        const meuArray = frase.split(" ");
        
        console.log(meuArray);

    // Questão 2.

        const listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
        
        const posicaopineapples = listaFrutas.findIndex(checkPineapple);

        function checkPineapple(fruta){
            return fruta === "Abacaxi";
        }
        
        const tamanhoListaFrutas = listaFrutas.length;
        
        console.log(`O array tem ${tamanhoListaFrutas} elementos, onde Abacaxi está na posição ${posicaopineapples}.`)
