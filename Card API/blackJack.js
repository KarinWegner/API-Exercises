let playerScore = 0
let dealerScore = 0
let activePlayer = ''
let activeTable = ''
let activeScore = 0
let highAceCards = []
let playerFinished = false;




const ResetPositions = ()=> {
    console.log('score reset')
    playerScore = '00'
    dealerScore = '00'
     updateScore(0,'player')
     updateScore(0,'dealer')
    activeScore = 0
    activePlayer = ''
    activeTable = ''
    highAceCards = new Array
    playerFinished=false;
    ResetDealerBoard()
   SetPlayer()
}


const addScore =(card) =>{
    const cardScore = card
    console.log(cardScore)
    console.log('active player: ' +activePlayer)
    console.log('active table: ' +activeTable.id)

    activeScore = +activeScore + +cardScore
    if(cardScore == 11)
        highAceCards.push(cardScore)

    console.log('active score: '+activeScore)

    updateScore(activeScore, activePlayer)
    
    
    if(activeScore > 21){
        if(highAceCards.length > 0){
            console.log('There is still hope!')
            while(highAceCards.length > 0 && activeScore > 21){
                highAceCards.pop()
                activeScore = +activeScore - 10
            }
        }
        if(activeScore>21){
           setStatusText('Bust!')
           setScore()
        gameEnd(activePlayer, playerScore, dealerScore)}
        else{
            updateScore(activeScore,activePlayer)
        }
    } 
    if(activeScore == 21)
    { setStatusText('BlackJack!')
        setScore()
        gameEnd(activePlayer,playerScore, dealerScore)
    }
}

function getCardValue(suit){
    let value = suit
    switch(suit)
    {
        case 'J': case 'Q': case 'K': case'0':
            value = 10
        break
        case 'A':
            value = 11
            break
        }
            return value
}

const  SetPlayer= async ()=>{
    console.log('Stand')
    setScore()
    if(activePlayer === 'player'){
        playerFinished = true
        activePlayer = 'dealer'
        await dealerTurn()
        gameEnd(activePlayer, playerScore, dealerScore)
        
    }
    else if(activePlayer == 'dealer'){
        if(playerFinished){
       return endGame(activePlayer, playerScore, dealerScore)
        }
        else{
            activePlayer='player'
            activeScore = '0'
        }
    }
    else{
        activePlayer = 'dealer'
        activeScore=dealerScore
    }
    activeTable = document.querySelector('#'+activePlayer+'Table')
         
         
         setStatusText('')
}
function setScore(){
    if(activePlayer == 'player'){
        playerScore = activeScore
    }
    else{
        dealerScore = activeScore
    }
}




 

