// Versão reduzida de Blackjack - Nosso Jogo

//console.log("Boas vindas ao jogo de Blackjack!");
//
//if(confirm("Quer iniciar uma nova rodada?")) {
//   rodada();
//} else {
//   console.log("O jogo acabou.")
//}
//
//
//function rodada(){
//
//   const user = [comprarCarta(), comprarCarta()];
//   
//   const userPoints = user[0].valor + user[1].valor;
//   const userCard1 = user[0].texto;
//   const userCard2 = user[1].texto;
//   
//   const computer = [comprarCarta(), comprarCarta()];
//   
//   const computerPoints = computer[0].valor + computer[1].valor;
//   const computerCard1 = computer[0].texto;
//   const computerCard2 = computer[1].texto;
//   
//   console.log("Usuário - cartas:", userCard1, userCard2, "pontuação", userPoints);
//   console.log("Computador - cartas:", computerCard1, computerCard2, "pontuação", computerPoints);
//
//   if(userPoints === computerPoints){
//      console.log("Empate!");
//   }else if(userPoints > computerPoints){
//      console.log("Usuário ganhou!");
//   }else{
//      console.log("O computador ganhou!");
//   }
//
//}
