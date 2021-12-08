/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS */

    // Questão 1.

        /*
            O código soma os valores assumidos pela variável i, de 0 a 4 (de acordo com 
            o critério de parada do laço for) e imprime no console o valor dessa soma.
            Portanto, será impresso no console:
            10
        */

    // Questão 2.
        
        // Item a.

            /*Será impresso no console:
                19
                21
                23
                25
                27
                30                
            */
        
        // Item b.

            /*
                Como o for of percorre o array em ordem (do índice 0 até o índice 
                array.length -1), para sabermos o índice, podemos colocar um contador dentro
                do laço:
                    
                    let i = 0;
                    for (let numero of lista) {
                        i++
                        if (numero > 18) {
		                    console.log(`${numero} está no índice ${i});
	                        }
                    }
            */     

    // Questão 3.

        /*Será impresso no console:
            *
            **
            ***
            ****            
        */

/* EXERCÍCIOS DE ESCRITA DE CÓDIGOS */

    // Questão 1.
        
            const quantidadeDePets = Number(prompt("Qual o nº de pets de estimação que você possui?"));
        
        // Itens a, b e c.
            
            if (quantidadeDePets === 0){
                console.log("Que pena! Você pode adotar um pet!")
            }else{
                let nomeDosPets = [];
                let pet = ""

                for(let i = 0; i < quantidadeDePets; i++){
                    pet = prompt(`Qual o nome do ${i + 1}º pet?`);
                    nomeDosPets.push(pet);
                }
                console.log(`Seu(s) pet(s) são: ${nomeDosPets}.`);
            }

    // Questão 2.

            //const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
        
        // Item a.
            
            const imprimirTodosValores = arrayRecebido => {
                for(let numero of arrayRecebido){
                    console.log(numero);
                }
            }
            //imprimirTodosValores(arrayOriginal);
        
        // Item b.

            const imprimirTodosDivididos = arrayRecebido => {
                for(let i of arrayRecebido){
                    console.log(i / 10);
                }
            }
            //imprimirTodosDivididos(arrayOriginal);

        // Item c.

            const imprimirTodosPares = arrayRecebido => {
                let somentePares = [];
               
                for(let i of arrayRecebido){
                    if(i % 2 === 0){
                        somentePares.push(i);
                    }
                }
                console.log(somentePares);
            }

            //imprimirTodosPares(arrayOriginal);

        // Item d.

            const imprimirTodosString = arrayRecebido => {
                let arrayStrings = [];
                let frase = "";
                
                for(let i = 0; i < arrayRecebido.length; i++){
                    frase = `O elemento do índex ${i} é: ${arrayRecebido[i]}`;
                    arrayStrings.push(frase);                  
                }
                console.log(arrayStrings);
            }
            
            //imprimirTodosString(arrayOriginal);

        // Item e.
            
            const imprimirMaiorMenor = arrayRecebido =>{
                let maiorNumero = Number.NEGATIVE_INFINITY;
                let menorNumero = Number.POSITIVE_INFINITY;

                for(i = 0; i < arrayRecebido.length; i++){
                    if(arrayRecebido[i] > maiorNumero){
                        maiorNumero = arrayRecebido[i];
                    }
                }
                for(j = 0; j < arrayRecebido.length; j++){
                    if(arrayRecebido[j] < menorNumero){
                        menorNumero = arrayRecebido[j];
                    }
                }
                console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`);
            }

            //imprimirMaiorMenor(arrayOriginal);
            
            
/* DESAFIOS */

    // Questão 1.

        let numeroParaAdvinhar = Number(prompt("Player 1, digite um número inteiro qualquer:"));
        console.log("Vamos jogar!");

        let numeroTentativas = 1;
        let numeroChutado = Number(prompt("Player 2, chute um número inteiro qualquer:"));;

        while(numeroChutado !== numeroParaAdvinhar){
        
            if(numeroChutado < numeroParaAdvinhar){
                console.log("O número chutado foi: " + numeroChutado);
                console.log("Errrou, o número escolhido pelo Player 1 é maior");
            }else if(numeroChutado > numeroParaAdvinhar){
                console.log("O número chutado foi: " + numeroChutado);
                console.log("Errrou, o número escolhido pelo Player 1 é menor");
            }
        
            numeroChutado = Number(prompt("Segundo jogador, chute um número inteiro qualquer:"));
            numeroTentativas += 1;
        }

        console.log("Acertou!!");
        console.log(`O número de tentativas foi: ${numeroTentativas}`);

    // Questão 2.
            
    numeroParaAdvinhar = Math.floor((Math.random() * 100) + 1);

    numeroTentativas = 1;
    numeroChutado = Number(prompt("Player, chute um número inteiro qualquer:"));;

    while(numeroChutado !== numeroParaAdvinhar){
    
        if(numeroChutado < numeroParaAdvinhar){
            console.log("O número chutado foi: " + numeroChutado);
            console.log("Errrou, o número escolhido pelo computador é maior");
        }else if(numeroChutado > numeroParaAdvinhar){
            console.log("O número chutado foi: " + numeroChutado);
            console.log("Errrou, o número escolhido pelo computador é menor");
        }
    
        numeroChutado = Number(prompt("Player, chute um número inteiro qualquer:"));
        numeroTentativas += 1;
    }

    console.log("Acertou!!");
    console.log(`O número de tentativas foi: ${numeroTentativas}`);