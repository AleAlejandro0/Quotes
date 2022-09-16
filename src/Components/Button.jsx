import React from 'react'

const Button = ({btnChange, buttonStyle}) => {
  return (
    <button onClick={btnChange} className='btn' style={buttonStyle}>&#62;</button>
  )
}

export default Button