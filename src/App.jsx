import { useState } from 'react'
import './App.css'
import QuoteBox from './Components/QuoteBox'
import quotes from "./json/quotes.json"
import colors from './utils/colors'

function App() { 
   
   const randomItem = arr => {
    const randomNumber = Math.floor((Math.random() * arr.length))
    return arr[randomNumber]
  }

  let randomQuote = randomItem(quotes)
  let randomColor = randomItem(colors)

  const [Quote, setQuote] = useState(randomQuote)

  const setRandom = () => {
    randomQuote = randomItem(quotes)
    randomColor = randomItem(colors)

    setQuote(randomQuote)
    setQuote(randomColor)
  }

  const objectColor = {
    backgroundColor: randomColor
  }

  return (
    <div className="App" style={objectColor}>
       <QuoteBox
       randomQuote ={randomQuote}
       randomColor ={randomColor}
       btnChange ={setRandom}
       />
    </div>
  )
}

export default App
