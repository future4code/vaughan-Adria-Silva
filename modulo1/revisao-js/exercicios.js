// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse();
    const arrayInvertido = []
    
    for(let j = array.length - 1; j >= 0; j-= 1){
        arrayInvertido.push(array[j]);
    }
    return arrayInvertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    //return array.sort((a, b) => a - b);
    let menorNumero = Number.POSITIVE_INFINITY;
    const arrayCrescente = [];
    let indiceMenorNumero = 0;

    while(array.length !== 0){
        for(let j = 0; j < array.length; j++){
            if(array[j] < menorNumero){
                indiceMenorNumero = j;
                menorNumero = array[j];
            }
        }
        arrayCrescente.push(menorNumero);
        array.splice(indiceMenorNumero, 1);
        menorNumero = Number.POSITIVE_INFINITY;
    }
    return arrayCrescente;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    //const apenasPares = array.filter( (elemento) => {
    //    return elemento % 2 === 0;
    //});
    //return apenasPares;
    const arrayDePares = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            arrayDePares.push(array[i]);
        }
    }
    return arrayDePares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPrares = retornaNumerosPares(array);
    const paresQuadrado = numerosPrares.map( (elemento) => {
        return Math.pow(elemento, 2);
    })
    return paresQuadrado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = Number.NEGATIVE_INFINITY;

    for(let numero of array){
        if(numero > maiorNumero){
            maiorNumero = numero;
        }
    }

    return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = 0;
    let menorNumero = 0;

    if (num1 > num2){
        maiorNumero = num1;
        menorNumero = num2;
    }else if(num1 < num2){
        maiorNumero = num2;
        menorNumero = num1;
    }else{ //caso num1 e num 2 sejam iguais
        maiorNumero = num1;
        menorNumero = num2;
    }

    const ehDivisivel = maiorNumero % menorNumero === 0;
    const diferenca = maiorNumero - menorNumero;

    const objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: ehDivisivel,
        diferenca: diferenca
    };

    return objeto;    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    
    const arrayNPares = []
    let i = 0;

    while(arrayNPares.length !== n){
        if( i % 2 === 0){
            arrayNPares.push(i);
        }
        i++;
    }
    console.log(n)
    return arrayNPares;  
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero";
    }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles";
    }else{
        return "Escaleno";
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    arrayOrdenado = retornaArrayOrdenado(array);

    arraySegundoMaiorMenor = [arrayOrdenado[arrayOrdenado.length - 2], arrayOrdenado[1]];

    return arraySegundoMaiorMenor;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    let listaAtores = "";

    for(let i = 0; i < filme.atores.length; i++){
        if(i === filme.atores.length - 1){
            listaAtores = listaAtores + filme.atores[i];
        }else{
            listaAtores = listaAtores + filme.atores[i] + ", ";
        }       
    }

    const frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${listaAtores}.`
    
    return frase;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return pessoa = {
        ...pessoa,
        nome: 'ANÔNIMO'
    };
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const entradaPermitida = pessoas.filter( (elemento) => {
        return elemento.altura >= 1.50 && elemento.idade > 14 && elemento.idade < 60;
    })
    return entradaPermitida;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const entradaProibida = pessoas.filter( (elemento) => {
        return elemento.altura < 1.50 || elemento.idade <= 14 || elemento.idade > 60;
    })
    return entradaProibida;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    const saldosAtualizados = contas.map( (elemento) => {
        let totalGasto = 0;
        for(let i = 0; i < elemento.compras.length; i++){
            totalGasto = totalGasto + elemento.compras[i];
        }

        const newDados = {
            ...elemento,
            saldoTotal: elemento.saldoTotal - totalGasto,
            compras: []
        };

        return newDados;
    })

    return saldosAtualizados;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const listaOrdenadaConsulta = consultas.sort( (a, b) => {
        let x = a.nome.toLowerCase();
        let y = b.nome.toLowerCase();
        if(x < y){
            return -1;
        }else if(x > y){
            return 1;
        }
            return 0;
    })
    return listaOrdenadaConsulta;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}