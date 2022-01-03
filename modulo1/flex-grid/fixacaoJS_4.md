## Exercícios de Fixação de Javascript - Treino 4

Crie uma função que recebe um array de números e um número escolhido. A função deve retornar quantas vezes este número aparece no array.

~~~javascript
    function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    if(arrayDeNumeros.includes(numeroEscolhido)){
      const quantidade = arrayDeNumeros.filter( (elemento) => {
        return elemento === numeroEscolhido;
      })
      return `O número ${numeroEscolhido} aparece ${quantidade.length}x`;
    }else{
      return "Número não encontrado";
    }
  }
~~~