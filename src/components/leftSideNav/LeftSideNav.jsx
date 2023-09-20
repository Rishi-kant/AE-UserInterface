

import React from 'react'
import style from "./LeftSideNav.module.css"
import { MdDashboard } from "react-icons/md";
import {GiPaperBoat } from "react-icons/gi";
import {MdDomainAdd } from "react-icons/md";
import {FaQuestion} from "react-icons/fa";
import {BiSupport } from "react-icons/bi";
import {IoMdLogOut } from "react-icons/io";


function LeftSideNav() {
  return (
    <div className={style.container}>
        <div className={style.profilecard}>
             <img src='https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg' alt='' className={style.img}/>
             <h3>Rishi kant</h3>
             <h5>kant3397@gmail.com</h5>
        </div>
        <div className={style.buttonsDiv}>
           <div className={style.navbuttons}><MdDashboard className={style.logo}/>Dashboard</div>
           <div className={style.navbuttons}><GiPaperBoat className={style.logo}/>Perks</div>
           <div className={style.navbuttons}> <MdDomainAdd className={style.logo}/>Addons</div>
           <div className={style.navbuttons}><FaQuestion className={style.logo}/>FAQ</div>
           <div className={style.navbuttons}><BiSupport className={style.logo}/>Support</div>
           <button className={style.logoutbtn}>Logout <IoMdLogOut className={style.logo}/></button>
        </div>
    </div>
  )
}

export default LeftSideNav