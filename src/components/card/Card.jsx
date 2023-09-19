

import React from 'react'
import style from "./Card.module.css"
import { BsArrowRight } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { TiCloudStorageOutline } from 'react-icons/ti';
import { MdOutlineMail } from 'react-icons/md';
import { AiFillCaretRight} from 'react-icons/ai';


function Card() {
  return (
    <div className={style.container}>
      <h2>Basic</h2>
      <h5>$10.90/m0</h5>
      <h3>$9.99/mo</h3>
      <button className={style.btn}>Get Started <BsArrowRight/></button>
      <div className={style.line}></div>
   
      <p >What you'l gate :</p>
      <div className={style.para}><BiUser/> Upto 25 users</div>
      <div className={style.para}><TiCloudStorageOutline/> Upto 25gb storage</div>
      <div className={style.para}><MdOutlineMail/> Email support</div>
      <div className={style.explore}>EXPLORE FEATURES <AiFillCaretRight className={style.exploreLogo}/></div>
    </div>
  )
}

export default Card