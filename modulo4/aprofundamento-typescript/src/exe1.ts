// EXERCÍCIO 1

// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, 
//então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a 
//ela. Tente atribuir um número a esta variável. O que acontece?

    // RESPOSTA:
        let minhaString : string = "Hello, world!";
        // Ao tentar atribuir um número à variável minhaString, é indicado
        //erro dizendo que tipo number não é atribuível a uma string.
    //

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor 
//numérico. Como fazer para que essa variável também aceite strings? Ou seja, 
//como criamos no typescript uma variável que aceite mais de um tipo de valor?

    // RESPOSTA:
        // Para atribuir um número à variável meuNumero, que deve aceitar 
        //number e string, podemos fazer:
        let meuNumero : number | string = 0;
    //

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir 
//três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos 
//acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham 
//os mesmos campos.

    // RESPOSTA:
        type MeuObjetoC = {
            nome : string,
            idade : number,
            corFavorita: string
        }
        let pessoa1 : MeuObjetoC = {
            nome: "Ádria",
            idade: 26,
            corFavorita: "vermelho"
        }
        let pessoa2 : MeuObjetoC = {
            nome: "Alan",
            idade: 29,
            corFavorita: "preto"
        }
        let pessoa3 : MeuObjetoC = {
            nome: "Jose",
            idade: 62,
            corFavorita: "azul"
        }
    //
    

// d) Modifique a propriedade `corFavorita` para que apenas seja possível 
//escolher entre as cores do arco-íris. Utilize um `enum` para isso.

    // RESPOSTA:
    enum CoresArcoIris {
        VERMELHO = "vermelho",
        LARANJA = "laranja",
        AMARELO = "amarelo",
        VERDE = "verde",
        AZUL = "azul",
        ANIL = "anil",
        VIOLETA = "violeta"
    }
    type MeuObjetoD = {
        nome : string,
        idade : number,
        corFavorita: CoresArcoIris
    }
    let pessoa4 : MeuObjetoD = {
        nome: "Ádria",
        idade: 26,
        corFavorita: CoresArcoIris.VERMELHO
    }
    let pessoa5 : MeuObjetoD = {
        nome: "Alan",
        idade: 29,
        corFavorita: CoresArcoIris.ANIL
    }
    let pessoa6 : MeuObjetoD = {
        nome: "Jose",
        idade: 62,
        corFavorita: CoresArcoIris.AZUL
    }
//