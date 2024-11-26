//Not implemented
console.log('loaded')
let cardsRevealed = 0;

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

const func = () =>{
  setTimeout(10)
}
const dealerSetup = async ()=>{
  console.log('HELLO')
  await prepareDealerTable()
 
 
console.log('preparedealertable done')
 // revealCard(2)
 

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



function revealCard(){
console.log('function revealCarc')
  for(i=0;i<cardsRevealed;i++){
    flipCard(cardsRevealed, hiddenCards[cardsRevealed].image)
  }

  cardsRevealed++
}



const addHiddenCard = (cardScore, cardImageURL)=>{
const hiddenCard = {cardScore, cardImageURL}

}
