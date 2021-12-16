## Exercícios de Fixação de Javascript - Treino 2

ˋˋˋjavascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let custoMacas = 0;
  if(quantidade < 12){
    custoMacas = 1.30 * quantidade;
  }else{
    custoMacas = 1.00 * quantidade;
  }
  return custoMacas;
}
ˋˋˋ