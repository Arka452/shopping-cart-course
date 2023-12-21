import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button type="button" className={`btns ${props.btnType} `} onClick={props.click}>{props.children}</button>
  )
}

export default Button