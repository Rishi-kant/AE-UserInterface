

import React from 'react'
import style from "./RightSideNav.module.css"
import { IoIosNotifications} from "react-icons/io";
import { BiPlus} from "react-icons/bi";
function RightSideNav() {
  return (
    <div className={style.container}>
        <div className={style.not}>
          <IoIosNotifications/> 
        </div>
        <div className={style.plus}>
         <BiPlus/>
        </div>
    </div>
  )
}

export default RightSideNav