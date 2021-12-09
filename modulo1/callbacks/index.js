/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS */

    // Questão 1.

        /* Será imporesso no console:
                { nome: "Amanda Rangel", apelido: "Mandi" } 0 [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }, { nome: "Letícia Chijo", apelido: "Chijo" }]
                { nome: "Laís Petra", apelido: "Laura" } 1 [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }, { nome: "Letícia Chijo", apelido: "Chijo" }]
                { nome: "Letícia Chijo", apelido: "Chijo" } 2 [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }, { nome: "Letícia Chijo", apelido: "Chijo" }]
        */

    // Questão 2.

        /* Será impresso no console:
            [
                Amanda Rangel,
                Laís Petra,
                Letícia Chijo
            ]
        */

    // Questão 3.

        /* Será impresso no console:
            [
                { nome: "Amanda Rangel", apelido: "Mandi" },
                { nome: "Laís Petra", apelido: "Laura" }
            ]
        
        */

/* EXERCÍCIOS DE ESCRITA DE CÓDIGOS */

    // Questão 1.
            
            const pets = [
                { nome: "Lupin", raca: "Salsicha"},
                { nome: "Polly", raca: "Lhasa Apso"},
                { nome: "Madame", raca: "Poodle"},
                { nome: "Quentinho", raca: "Salsicha"},
                { nome: "Fluffy", raca: "Poodle"},
                { nome: "Caramelo", raca: "Vira-lata"},
            ]
        
        // Item a.

            const nomesDosDoguinhos = pets.map( (pets) => {
                return pets.nome;
            })

            //console.log(nomesDosDoguinhos);

        // Item b.
            
            const doguinhosSalsicha = pets.filter( (pets) => {
                return pets.raca === "Salsicha"
            })

            //console.log(doguinhosSalsicha);
        
        // Item c.

            const doguinhosPoodle = pets.filter( (pets) => {
                return pets.raca === "Poodle";
            })
            
            //console.log(doguinhosPoodle);

            const mensagemParaPoodlesOwners = doguinhosPoodle.map( (doguinhosPoodle) => {
                return `Você ganhou um cupom de desconto de 10% para tosar o/a ${doguinhosPoodle.nome}!`
            })

            //console.log(mensagemParaPoodlesOwners);

    // Questão 2.

            const produtos = [
                { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
                { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
                { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
                { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
                { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
                { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
                { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
                { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
                { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
                { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
            ]

        // Item a.

            const nomeTodosProdutos = produtos.map( (produtos) => {
                return produtos.nome
            })

            //console.log(nomeTodosProdutos)

        // Item b.

            const nomePrecoTodosProdutos = produtos.map( (produtos) => {
                return {nome: produtos.nome, preco: produtos.preco};
            })

            //console.log(nomePrecoTodosProdutos);

        // Item c.

            const produtosBebidas = produtos.filter( (produtos) => {
                return produtos.categoria === "Bebidas";
            })

            //console.log(produtosBebidas);

        // Item d.

            const produtosYpe = produtos.filter( (produtos) => {
                return produtos.nome.includes("Ypê");
            })

            //console.log(produtosYpe);

        // Item e.

            const venderYpe = produtosYpe.map( (produtosYpe) => {
                return `Compre ${produtosYpe.nome} por ${produtosYpe.preco}`;
            })

            console.log(venderYpe);

            
