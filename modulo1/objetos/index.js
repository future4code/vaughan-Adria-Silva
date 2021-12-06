/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO */

    //Questão 1.

        // Item a.

            /* Será impresso no console:
            
                Matheus Nachtergaele
                Virginia Cavendish
                canal: "Canal Brasil"
                horario: "19h"
            */

    //Questão 2.

        // Item a.

            /*Será impresso no console:    
                nome: "Juca"
                idade: 3
                raca: "SRD"

                nome: "Juba"
                idade: 3
                raca: "SRD"

                nome: "Jubo"
                idade: 3
                raca: "SRD"
            */

        // Item b.
            /*
                Os tres pontos é a sintaxe do spread (espelhamento). O
                seu uso permite copiar todo o conteúdo de um objeto para
                o objeto onde os ... estão. Depois do ...nomeDoObjetoCopiado
                é possível estabelecer a alteraão do valor de chaves já
                existentes e acrescentar outras no novo objeto. 
            */

    //Questão 3.

        //Item a.

            /*Será impresso no console:
                false
                undefined
            */

        //Item b.

            /*
                É impresso undefined porque não foi atribuído um valor a
                nova propriedade altura.
            */

/* EXERCÍCIOS DE ESCRITA DE CÓDIGO */

    //Questão 1.
        // Item a.

            const person = {
                nome: "Ádria",
                apelidos: [
                    "Dri",
                    "Adrinha",
                    "Cachinhos"
                ]
            }

            const apresentar = objeto => {
                console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`);
            }

            apresentar(person);

        // Item b.
            const newPerson = {
                ...person,
                apelidos: [
                    "Estou",
                    "Sem",
                    "Criatividade"
                ]
            }

            apresentar(newPerson);

    //Questão 2.

        // Item a.

            const pessoaA = {
                nome: "Ádria",
                idade: "25",
                profissao: "Estudante"
            }

            const pessoaB = {
                nome: "Alan",
                idade: 27,
                profissao: "Desenvolvedor"
            }
        // Item b.

            const info = pessoa => {
                const charsNome = pessoa.nome.length;
                const charsJob = pessoa.profissao.length;

                return [pessoa.nome, charsNome, pessoa.idade, pessoa.profissao, charsJob];
            }

            console.log(info(pessoaB));

    //Questão 3.

        // Item a.

            const carrinho = [];

        // Item b.

            const fruta1 = {
                nome: "uva",
                disponibilidade: true
            };
            const fruta2 = {
                nome: "manga",
                disponibilidade: false
            };
            const fruta3 = {
                nome: "acerola",
                disponibilidade: true
            };

        // Item c.

            const comprar = fruta => carrinho.push(fruta);

            comprar(fruta1);
            comprar(fruta2);
            comprar(fruta3);
            
        // Item d.

            console.log(carrinho);

            


