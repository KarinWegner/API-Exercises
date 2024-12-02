const controls = document.querySelector('.controls')
const playerTable = document.querySelector('#playerTable')
const dealerTable = document.querySelector('#dealerTable')
const gameScreen = document.querySelector('main')
const startScreen = document.querySelector('.startScreen')
const startImg = document.querySelector('.headerImg')
const btnStart = document.querySelector('#startButton')
const btnStand = document.querySelector('#standButton')
const statusText = document.querySelector('.statusText')
let initialized = false
let gameActive = false

btnStart.addEventListener('click', () => {
   
   newGame()
    
})
btnStand.addEventListener('click', (e) => SetPlayer(e))

const FinishedSetup = async (cb) =>{
    await setTimeout(()=>{cb()}, 1000)
    
  }

async function newGame() {
    if (initialized === false) {
        console.log('changing game to active')
        btnStart.innerHTML = 'Restart'

        initialized=true;
    }
Setup()
   
}
async function Setup(){
     startScreen.classList.add('hidden')
    playerTable.innerHTML = ''
    dealerTable.innerHTML = ''
    
    gameScreen.classList.remove('hidden')
    //await ResetScore()   
    await ResetPositions()
    await dealerSetup()
    await FinishedSetup(m=>SetPlayer(m))
   
    console.log('dealerSetup done')
}

const ResetScore = async ()=>{
    await updateScore('0','player')
    await updateScore('0','dealer')
}

function gameEnd(activePlayer,playerScore, dealerScore) {
    gameScreen.classList.add('hidden')
    startScreen.innerHTML = `<h2>Game Over!</h2>
    <ul class="scoreHolder" style=" flex-direction:row; padding-top=0px; justify-content:center;">
    <li>
        <h3>Player:</h3>
    </li>
    <li class="score" id="playerScore" style="width:50px;">
       <h3>${playerScore}</h3>
    </li>
     <li id="separator" style="margin:0; padding:0;">
        |
    </li>
    <li class="score" id="dealerScore" style="width:50px; text-align:end;">
        <h3>${dealerScore}</h3>
    </li>
    <li>
    <h3>:Dealer</h3>
    </li>
</ul>    `

    startScreen.classList.remove('hidden')

    if(activePlayer == 'player'){
        if(playerScore == 21){
            startScreen.innerHTML += `<h3>You got a blackjack!</h3>`
         startScreen.innerHTML += `<h3>You win!</h3>`

           }
        else{
            startScreen.innerHTML += `<h3>Bust.</h3>`
            startScreen.innerHTML += `<h3>You lose!</h3>`

        }
    }
    else{
        if(dealerScore > 21){
            startScreen.innerHTML += `<h3>Dealer bust.</h3>`
            startScreen.innerHTML += `<h3>You win!</h3>`
        }
        else if(dealerScore == 21){
            
            startScreen.innerHTML += `<h3>Draw!</h3>`
        }
        else{
            if(playerScore > dealerScore){
                
            startScreen.innerHTML += `<h3>You win!</h3>`
            }
            else{
                
            startScreen.innerHTML += `<h3>You lose!</h3>`
            }
        }
            
        
    }
    ResetScore()
    console.log('endGame score reset')

}

function updateScore(score, player){
const scoreHolder = document.querySelector('#'+player+'Score')
scoreHolder.innerHTML = '' 
scoreHolder.innerHTML = `<h2>${score}</h2>`
    console.log('Updated score for '+ player)

}
function setStatusText(text){
    const newStatusText = text
    console.log('setStatusText: '+text)
 statusText.innerHTML = `<h2>${text}</h2>`
}

const flipCard = async (dealerCardId, cardImage) =>{
    console.log('flipping dealercard' +dealerCardId)
    console.log(cardImage)
    
    document.querySelector('#hiddenCard').src = cardImage
//    selectedCard.src = cardImage
}