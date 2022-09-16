import React from 'react'
import Button from './Button'

const Card = ({randomQuote, randomColor, btnChange}) => {

  const quoteStyle = {
    color: randomColor
  }
  const buttonStyle = {
    backgroundColor: randomColor
  }

  return (
    <div className='quote'>
      <div className='quote__container'>
          <i className="fa-solid fa-quote-left" style={quoteStyle}></i>
             <p className='quote__content' style={quoteStyle}>{randomQuote.quote}</p>
             <p className='quote__author' style={quoteStyle}>{randomQuote.author}</p>
         <Button
           btnChange={btnChange}
           buttonStyle={buttonStyle}
         />
      </div>
    </div>
  )
}

export default Card
