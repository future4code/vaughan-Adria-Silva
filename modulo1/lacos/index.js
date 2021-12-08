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

            const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
        
        // Item a.
            
            const imprimirTodosValores = arrayOrigin => {
                for(let numero of arrayOrigin){
                    console.log(numero);
                }
            }
            imprimirTodosValores(arrayOriginal);
        
        // Item b.

            const imprimirTodosDivididos = arrayOrigin => {
                for(let i of arrayOrigin){
                    console.log(i / 10);
                }
            }
            imprimirTodosDivididos(arrayOriginal);

        // Item c.

            const imprimirTodosPares = arrayOrigin => {
                let somentePares = [];
               
                for(let i of arrayOrigin){
                    if(i % 2 === 0){
                        somentePares.push(i);
                    }
                }
                console.log(somentePares);
            }

            imprimirTodosPares(arrayOriginal);

        // Item d.

            const imprimirTodosString = arrayOrigin => {
                let arrayStrings = [];
                let frase = "";
                
                for(let i = 0; i < arrayOrigin.length; i++){
                    frase = `O elemento do índex ${i} é: ${arrayOrigin[i]}`;
                    arrayStrings.push(frase);                  
                }
                console.log(arrayStrings);
            }
            
            imprimirTodosString(arrayOriginal);

        // Item e.
            
            const imprimirMaiorMenor = arrayOrigin =>{
                let maiorNumero = -100000000;
                let menorNumero = 1000000000;

                for(i = 0; i < arrayOrigin.length; i++){
                    if(arrayOrigin[i] > maiorNumero){
                        maiorNumero = arrayOrigin[i];
                    }
                }
                for(j = 0; j < arrayOrigin.length; j++){
                    if(arrayOrigin[j] < menorNumero){
                        menorNumero = arrayOrigin[j];
                    }
                }
                console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`);
            }

            imprimirMaiorMenor(arrayOriginal);
            
            
        