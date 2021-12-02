/**EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO */

    // Questão 1.

        // Item a.

            /*Será impresso:
                10
                50
            */

        // Item b.

            /* 
                Se apenas invocar a função sem o console.log(), o valor
                retornado pela função não será impresso
            */

    // Questão 2.

        // Item a.

            /*
                Os caracteres do texto usado como parâmetro de entrada na 
                função são transformados em caracteres minúsculos. A partir
                disso, é averiguado se a sequência de strings "cenoura"
                ocorre no texto, retornando o valor true ou false a depender
                do resultado de busca.
            */

        // Item b.

            /*
                i. true
                ii. true
                iii. true
            */

/**EXERCÍCIOS DE ESCRITA DE CÓDIGO */

    // Questão 1.

        // Item a.

            const nome = "Ádria";
            const idade = 25;
            const endereco = "Fortaleza/CE";
            const profissao = "estudante";

            function apresentarA(){
                console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`);
            }

            apresentarA()

        // Item b.

            function apresentarB(name, age, address, job){
                return `Eu sou ${name}, tenho ${age} anos, moro em ${address} e sou ${job}.`;
            }

            console.log(apresentarB("Ádria", 25, "Fortaleza/CE", "estudante"));

    // Questão 2.

        // Item a.

            const somar = (num1, num2) => num1 + num2;
            console.log(somar(1, 4));

        // Item b.

            const comparar = (num1, num2) => num1 >= num2;
            //console.log(comparar(1, 4));

        // Item c.

            const ehPar = num => num % 2 === 0;
            //console.log(ehPar(5));

        // Item d.

            const imprimir = mensagem => {
                console.log(`A mensagem a seguir possui ${mensagem.length} caracteres.`);
                console.log(mensagem.toUpperCase());
            }
            //imprimir("Os professores da Labenu são ótimos!")
            
    // Questão 3.

        const somarNew = (num1, num2) => num1 + num2;
        const subtrair = (num1, num2) => num1 - num2;
        const multiplicar = (num1, num2) => num1 * num2;
        const dividir = (num1, num2) => num1 / num2;

        const num1 = Number(prompt("Por favor, insira um número qualquer:"));
        const num2 = Number(prompt("Por favor, insira outro número qualquer:"));

        console.log(`Números inseridos: ${num1} e ${num2}`);
        console.log(`Soma: ${somarNew(num1, num2)}`);
        console.log(`Diferença: ${subtrair(num1, num2)}`);
        console.log(`Multiplicação: ${multiplicar(num1, num2)}`);
        console.log(`Divisão: ${dividir(num1, num2)}`);

/** DESAFIOS */

    // Questão 1.

        // Item a.
            
            const minhaFlecha = parametro => console.log(parametro);
            //minhaFlecha(2)

        // Item b.

            const myArrow = (valor1, valor2) => {
                const somatorio = valor1 + valor2;
                minhaFlecha(somatorio);
            }
            //myArrow(2, 2);

    // Questão 2.

        const calcularHipotenusa = (cateto1, cateto2) => {
            const somaCatetosQuadrados = Math.pow(cateto1, 2) + Math.pow(cateto2, 2);
            return Math.sqrt(somaCatetosQuadrados);
        }

        console.log(calcularHipotenusa(4, 5));