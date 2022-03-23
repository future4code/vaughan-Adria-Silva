// Exercício 1

// A seguinte função em JavaScript recebe como parâmetro os tamanhos dos 
//três lados do triângulo: ladoA, ladoB, ladoC e retorna se ele é 
//equilátero, isósceles ou escaleno. Refatore a função para o Typescript.

// function checaTriangulo(a, b, c) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

function checaTriangulo(a:number, b:number, c:number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    };
};

console.log(checaTriangulo(8, 5, 7));

// Exercício 2

// A seguinte função em JavaScript pergunta ao usuário suas três cores 
//favoritas e imprime no console um array que contenha essas três cores. 
//Refatore a função para o Typescript.

// function imprimeTresCoresFavoritas() {
//   const cor1 = prompt("Insira sua primeira cor favorita")
//   const cor2 = prompt("Insira sua segunda cor favorita")
//   const cor3 = prompt("Insira sua terceira cor favorita")
//   console.log([cor1, cor2, cor3])
// }

  // function imprimeTresCoresFavoritas():void {
  //   const cor1:string = prompt("Insira sua primeira cor favorita")
  //   const cor2:string = prompt("Insira sua segunda cor favorita")
  //   const cor3:string = prompt("Insira sua terceira cor favorita")
  //   console.log([cor1, cor2, cor3])
  // }

//Exercício 3

// A função recebe um ano e retorna um booleano (true ou false) que indica 
//se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:
//  São bissextos todos os anos múltiplos de 400.
//  São bissextos todos os múltiplos de 4, exceto se for múltiplo de 100 
//mas não de 400**.**
//  Não são bissextos todos os demais anos.
//Com isso em mente, refatore a função para o Typescript.

// function checaAnoBissexto(ano) {
//   const cond1 = ano % 400 === 0
//   const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//   return cond1 || cond2
// }

  function checaAnoBissexto(ano:number):boolean {
    const cond1:boolean = ano % 400 === 0;
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0);
    return cond1 || cond2;
  };

  console.log(checaAnoBissexto(2016));

// Exercício 4

// A seguinte função recebe dois números como parâmetro e retorna a diferença 
//entre o maior número e o menor. Dessa forma, refatore a função para o Typescript.

// function comparaDoisNumeros(num1, num2) {
//   let maiorNumero;
//   let menorNumero;

//   if (num1 > num2) {
//     maiorNumero = num1;
//     menorNumero = num2;
//   } else {
//     maiorNumero = num2;
//     menorNumero = num1;
//   }

//   const diferenca = maiorNumero - menorNumero;

//   return diferenca 
// }

  function comparaDoisNumeros(num1:number, num2:number):number {
    let maiorNumero:number;
    let menorNumero:number;

    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    };

    const diferenca:number = maiorNumero - menorNumero;

    return diferenca;
  };

  console.log(comparaDoisNumeros(500,1020));