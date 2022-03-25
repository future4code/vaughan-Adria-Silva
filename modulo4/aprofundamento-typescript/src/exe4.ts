// EXERCÍCIO 4

// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.

    type pokemon = {
    	name: string,
      types: string,
    	healthPoints: number
    }

    const pokemon1: pokemon = {
      name: "Charmander",
      types: "Fire",
      healthPoints: 28
    }

    const pokemon2: pokemon = {
      name: "Bulbasaur",
      types: "Grass/Poison",
      healthPoints: 31
    }

    const pokemon3: pokemon = {
      name: "Squirtle",
      types: "Water",
      healthPoints: 35
    }

// b) Como você faria, já com a extensão instalada, para transpilar
//(converter) esse arquivo typescript em um arquivo javascript?
    
    // RESPOSTA:
    // No terminal, rodaria o comando: tsc && node ./build/exe3.js (que 
    //já está no script do pacestá)

// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? 
//Caso conheça, explique como fazer.

    // RESPOSTA:
    // Não conhecia, mas vi nas dicas como fazer =)