import React from 'react'
import style from "./Navbar.module.css"
import { BiSolidChevronDown } from "react-icons/bi";
function Navbar() {
  return (
    <div className={style.container} >
        <div className={style.infoDiv}>
          <div className={style.name}>
            <img src='https://images.pexels.com/photos/2180780/pexels-photo-2180780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='logo' className={style.logoimg}/>XYZ Enterprises Pvt. Ltd
          </div>
          <div className={style.navigat}>
            <BiSolidChevronDown/>
          </div>
        </div>
    </div>
  )
}

export default Navbar
