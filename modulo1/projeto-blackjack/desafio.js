//Desafio Blackjack Completo

if(confirm(
   "Boas vindas ao jogo de Blackjack! \n" +
   "Quer iniciar uma nova rodada?")) {
   game();
} else {
   console.log("O jogo acabou.")
}

function game(){
   
   const user = [];
   user.push(firstRound());

   const computer = []
   computer.push(firstRound());

   const userInitialHand = user;   
   const computerInitialHand = computer;

   if (userInitialHand[0].points === 21 || computerInitialHand[0].points === 21){  
      gameResults(userInitialHand[0], computerInitialHand[0]);
      return;
   }

   const revealedComputerCard = computerInitialHand[0].cards.slice(0,2);
   const finalUserHand = roundUser(userInitialHand, revealedComputerCard);

   if (userInitialHand[0].points !== finalUserHand.points && finalUserHand.points < 21){
      
      const finalComputerHand = roundComputer(computerInitialHand, finalUserHand.points);
      gameResults(finalUserHand, finalComputerHand);

   }else{

      gameResults(finalUserHand, computerInitialHand[0]);

   }

}

function firstRound(){

   let playerInitialHand = [comprarCarta(), comprarCarta()];

   while(playerInitialHand[0].valor === 11 && playerInitialHand[1].valor === 11){
      playerInitialHand = [comprarCarta(), comprarCarta()];
   }

   return playerInitialHand = {
      cards: `${playerInitialHand[0].texto} ${playerInitialHand[1].texto}`,
      points: playerInitialHand[0].valor + playerInitialHand[1].valor
   }
}

function gameResults(userFinalGame, computerFinalGame){
  
   let resultado = "";
   if(userFinalGame.points > 21){
      resultado = "Computador ganhou!";
   }else if(computerFinalGame.points > 21 && userFinalGame.points <= 21){
      resultado = "O Usuário ganhou!";
   }else if(userFinalGame.points > computerFinalGame.points){
      resultado = "O Usuário ganhou!";
   }else if(userFinalGame.points < computerFinalGame.points){
      resultado = "Computador ganhou!";
   }else{
      resultado = "Empate!";
   }

   alert(
      `Suas cartas são ${userFinalGame.cards}. Sua pontuação é ${userFinalGame.points} \n` +
      `As cartas do computador são ${computerFinalGame.cards}. A pontuação do computador é ${computerFinalGame.points} \n` +
      `${resultado}`
   )

}

function roundUser(userHand, firstComputerCard){

   let allUserCards = userHand[0].cards;
   let allUserPoints = userHand[0].points;

   let i = 1;


   while(confirm(`Suas cartas são ${allUserCards}. A carta revelada do computador é ${firstComputerCard}.` +
   `\n` + `Deseja comprar mais uma carta?`)){

      userHand.push(comprarCarta());

      allUserCards = allUserCards + " " + userHand[i].texto;
      allUserPoints = allUserPoints + userHand[i].valor;

      if(allUserPoints >= 21){
         break;
      }

      i += 1;
   }

   return userHand = {
      cards: allUserCards,
      points: allUserPoints
   }

}

function roundComputer(computerHand, userPoints){

   let allComputerCards = computerHand[0].cards;
   let allComputerPoints = computerHand[0].points;

   let i = 1

   while(allComputerPoints < userPoints){

      computerHand.push(comprarCarta());

      allComputerCards = allComputerCards + " " + computerHand[i].texto;
      allComputerPoints = allComputerPoints + computerHand[i].valor;
      
      i += 1;
   }

   return computerHand = {
      cards: allComputerCards,
      points: allComputerPoints
   }
}