

import React from 'react'
import style from "./Card.module.css"
import { BsArrowRight } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { TiCloudStorageOutline } from 'react-icons/ti';
import { MdOutlineMail } from 'react-icons/md';
import { AiFillCaretRight} from 'react-icons/ai';


function Card({plan,bgcol,pric1,pricf,users,storage,content,arrowcol}) {
  return (
    <div className={style.container}>
      <h2>{plan}</h2>
      <h5 className={style.price}>${pric1}/mo</h5>
      <h3>${pricf}/mo</h3>
      <button className={style.btn} style={bgcol}>Get Started <BsArrowRight/></button>
      <div className={style.line}></div>
   
      <p >What you'l gate :</p>
      <div className={style.para}><BiUser/> Upto {users} users</div>
      <div className={style.para}><TiCloudStorageOutline/> Upto {storage}gb storage</div>
      <div className={style.para}><MdOutlineMail/> {content}</div>
      <div className={style.explore}>EXPLORE FEATURES <AiFillCaretRight className={style.exploreLogo} style={arrowcol}/></div>
    </div>
  )
}

export default Card