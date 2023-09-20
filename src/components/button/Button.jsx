

import React from 'react'
import styling from "./Button.module.css"
import { BsArrowRight } from 'react-icons/bs';
function Button({style,text}) {
  return (
    <div >
    <button style={style} className={styling.btn}>{text} <BsArrowRight/></button>
    </div>
  )
}

export default Button