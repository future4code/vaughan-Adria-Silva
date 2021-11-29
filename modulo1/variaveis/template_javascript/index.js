/*   Exercícios de Interpretação de Códigos   */
    /* Questão 1. Será impresso:
        10
        10 5
    */

    /* Questão 2. Será impresso:
        10 10 10
    */

    /* Questão 3. Sugestões de nomes:
        Para a variável p: horasDiariasTrabalhadas
        Para a variável t: pagamentoDiario
    */

/*   Exercícios de Escrita de Códigos   */
    // Questão 1.
        // itens a, b, c e d.
            let nome;
            let idade;

            console.log(typeof(nome));
            console.log(typeof(idade));

            /* Foi impresso undefined pois não foi atribuído valores às variáveis */
        
        // itens e, f, e g.
            nome = prompt("Por favor, informe o seu nome:");
            idade = prompt("Por favor, informe a sua idade:");

            console.log(typeof(nome));
            console.log(typeof(idade));

            /* Foi impresso string para os dois consoles pois tudo aquilo que é digitado no prompt pelo usuário é string */
         
            console.log("Olá", nome, ", você tem", idade, "anos.");
    
    // Questão 2.
        let estudos = "Você estudou programação hoje?";
        let exercicio = "Você praticou atividade física hoje?";
        let filhos = "Você tem filhos?";

        let respostaEstudos = "SIM";
        let respostaExercicio = "NÃO";
        let respostaFilhos = "NÃO";

        console.log(estudos, "-", respostaEstudos);
        console.log(exercicio, "-", respostaExercicio);
        console.log(filhos, "-", respostaFilhos);
    
    // Questão 3.
        let a = 10;
        let b = 25;
        let c = a

        a = b;
        b = c;

        console.log("O novo valor de a é", a);
        console.log("O novo valor de b é", b);


