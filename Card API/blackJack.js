let playerScore = 0
let dealerScore = 0
let activePlayer = ''
let activeTable = 'player'
let activeScore = 0
let highAceCards = []




const ResetPositions = ()=> {
    console.log('score reset')
    playerScore = '00'
    dealerScore = '00'
    activeScore = 0
    activePlayer = ''
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

function SetPlayer (){
    console.log('Stand')
    setScore()
    if(activePlayer === 'player'){
        activePlayer = 'dealer'
        
    }
    else if(activePlayer == 'dealer'){
        endGame(activePlayer, playerScore, dealerScore)
    }
    else{
        activePlayer = 'player'
    }
    activeTable = document.querySelector('#'+activePlayer+'Table')
         
         activeScore = '0'
         setStatusText('')
         if(activePlayer == 'dealer'){
            dealerTurn()
         }
}
function setScore(){
    if(activePlayer == 'player'){
        playerScore = activeScore
    }
    else{
        dealerScore = activeScore
    }
}


async function dealerTurn (){
    console.log('dealerTurn')
    const fetchDealer = fetch(dealerDraw)//Doesnt work
    while(dealerScore < 21 && playerScore > dealerScore){
      await fetchDealer()
      .then ()

    }
}

 

