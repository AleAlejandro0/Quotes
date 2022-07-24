import React from 'react'

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
          <button onClick={btnChange} className='btn' style={buttonStyle}>&#62;</button>
      </div>
    </div>
  )
}

export default Card
