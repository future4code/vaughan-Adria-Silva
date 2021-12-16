## Exercícios de Fixação de Javascript - Treino 3

```javascript
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  const mediaPonderada = ( ex + p1 * 2 + p2 * 3) / 6;
  let conceito = "";
  if(mediaPonderada >= 9){
    conceito = "A";
  }else if(mediaPonderada >= 7.5){
    conceito = "B";
  }else if(mediaPonderada >= 6){
    conceito = "C";
  }else{
    conceito = "D";
  }
  return conceito;
}
```