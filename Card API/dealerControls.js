//Not implemented
console.log('loaded')
let cardsRevealed = 0;
let hiddenCardIMG = ''
let hiddenCardScore = ''

const ResetDealerBoard = () =>{
  
  cardsRevealed = 0
  hiddenCards = new Array
}

// function setCardScore(score){
// results.score = score
// }
// function setCardImage(image){
//   results.image = image
// }


const dealerSetup = async ()=>{
  console.log('HELLO')
  await prepareDealerTable()
 
 
console.log('preparedealertable done')
 // revealCard(2)
 }

 const dealerTurn = async () =>{
  if(dealerScore > playerScore)
    gameEnd(activePlayer, playerScore, dealerScore)
  else{
    await revealCard()
    console.log('dealer active score: '+ dealerScore)
    await addScore(hiddenCardScore)
    
  }
 }


    async function prepareDealerTable(){
      let cardHidden=false
      for(i=0;i<2;i++){
        console.log('dealerDraw')
         dealerDraw(cardHidden)             
      }
      cardHidden = true
         dealerDraw(cardHidden)
        //await revealCard();
      return
    }



async function revealCard(){
console.log('function revealCarc')
  
    await flipCard(hiddenCardScore, hiddenCardIMG)
  

  
}



const addHiddenCard = (cardScore, cardImage)=>{
  hiddenCardIMG = cardImage
  hiddenCardScore=cardScore

}
