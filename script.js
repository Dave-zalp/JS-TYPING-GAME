const API_URL = 'https://api.quotable.io/random'
const quoteDisplayElement  = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput') 

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')  // Ypu can use it to convert a string to an array.
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null){
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
        }
       else  if(character === characterSpan.innerText){
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }
        else{
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
        }
    })
})


async function getNextQuote(){
    const response = await fetch(API_URL)
    const quoteresponse = await response.json()
    const quote = quoteresponse.content

    quoteDisplayElement.innerHTML = ''

    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)

    })
  
    quoteInputElement.value = null
}

getNextQuote()

