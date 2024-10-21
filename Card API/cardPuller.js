const btnDraw = document.querySelector('#hitButton')
const imgHolder = document.querySelector('#playerTable')


btnDraw.addEventListener('click', () => {

    console.log('button clicked')
    drawCard()
})


function newGame(){
    score = 0
    gameActive = true
    imgHolder.innerHTML ='';
    drawCard();
}
function endGame(){
    gameActive = false;
    btnDraw.innerHTML = 'Start'
}

async function drawCard() {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1', {
        method: 'GET',
        headers: {
            'Accept': 'Application/json'
        }
    })
        .then(res => {
            if (res.ok)
                return res.json()
            throw new Error / 'Failed to get response'
        })
        .then(data => {
            console.log(data.cards[0])
            const cardImageURL = data.cards[0].image

                const cardCode = data.cards[0].code[0]
                
            
            const cardScore = getCardValue(cardCode)
            
            console.log(activeTable.id)

            activeTable.innerHTML += `
        <img class="card" id="${cardScore}" src="${cardImageURL}" width="150px"></img>
        `
    addScore(cardScore)

        })

}
