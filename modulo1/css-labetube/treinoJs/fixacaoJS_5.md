# Exercícios de Fixação de Javascript - Treino 5

```javascript
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui
 
  const animalsName = animais.map( elemento => {
    return elemento.nome;
  })
  return animalsName;
}
```