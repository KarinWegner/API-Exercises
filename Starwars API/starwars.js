const textOutput = document.querySelector('textarea')
const inputBox = document.querySelector('input')
const sendButton = document.querySelector('button')
const startURL = 'https://www.swapi.tech/api/people/?name='

sendButton.addEventListener('click', () => {

    const textAddon = inputBox.value
    if (textAddon == '') {
        console.log('Error: Empty input')
        return
    }
    console.log(textAddon)
    
    getApi(startURL + textAddon)


})

function getApi(fullURL) {
    /*Skriv din kod här*/
    console.log(fullURL)
    fetch(fullURL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            if (res.ok)
                return res.json()
            throw new Error / 'Failed to get response'
        })
        .then(data => {

            console.log(data)
            textOutput.innerHTML = ''
        const characterInfo = data.result[0].properties
        console.log(characterInfo)
        
        textOutput.innerHTML +=
        `        Name: ${characterInfo.name}
        Height: ${characterInfo.height}
        Mass: ${characterInfo.mass}
        Gender: ${characterInfo.gender}
        Hair color: ${characterInfo.hair_color}`
        
            // textOutput.innerHTML = `${data.name}`
            
        })
        .catch(err => console.log(err))
}

function getURL(textInput) {

}
