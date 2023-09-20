import React from "react";
import style from "./Body.module.css";
import Card from "../card/card";
import Button from "../button/Button";
import { BiUser } from "react-icons/bi";
import { TiCloudStorageOutline } from "react-icons/ti";

import { MdOutlineMail } from "react-icons/md";
import { RiCheckDoubleLine } from "react-icons/ri";
function Body() {
  return (
    <div className={style.container}>
      <div className={style.infosec}>
        <div>
          <h2>Choose a plan that's just right for you !</h2>
        </div>
        <div className={style.buttonsDiv}>
          <button className={style.btn}>Monthly</button>
          <button className={style.btn2}>Annually</button>
        </div>
      </div>
      <div className={style.contentdiv}>
        <div className={style.plansDiv}>
          <Card 
          plan={"Basic"}
          bgcol={{backgroundColor:"rgb(237, 197, 121)"}}
          pric1={89.99}
          pricf={9.99}
          users={25}
          storage={25}
          content={"Email support"}
          arrowcol={{color:"rgb(237, 197, 121)"}}
          />
          <Card
          plan={"Standerd"}
          bgcol={{backgroundColor:"rgb(300, 100, 85)"}}
          pric1={189.99}
          pricf={99.99}
          users={50}
          storage={60}
          content={"Email+chat support"}
          arrowcol={{color:"rgb(300, 100, 85)"}}
          />
          <Card 
          plan={"Premium"}
          bgcol={{backgroundColor:"rgb(205, 94, 210)"}}
          pric1={389.99}
          pricf={199.99}
          users={75}
          storage={100}
          content={"Email+chat+whatsapp support"}
          arrowcol={{color:"rgb(205, 94, 210)"}}
          />
        </div>
        <div className={style.lowerDiv}>
          <div className={style.verticalcard}>
            <div className={style.leftDiv}>
              <button className={style.btnuseless} style={{backgroundColor:"rgb(165, 245, 165)"}}>free forever</button>
              <h1>Free Starter</h1>
              <p>
                The quickest and easiest way to try protocols with basic
                functionalitis
              </p>
              <Button style={{backgroundColor:"rgb(165, 245, 165)"}}  text={"Get Started"}/>
            </div>
            <div className={style.rightDiv}>
              <p>What you'l gate :</p>
              <div className={style.para}>
                <BiUser /> Upto 25 users
              </div>
              <div className={style.para}>
                <TiCloudStorageOutline /> Upto 25gb storage
              </div>
              <div className={style.para}>
                <MdOutlineMail /> Email support
              </div>
              <p>
              <RiCheckDoubleLine/> Basics of documents, task flow, voting, accounting,banking, notes, invester, director and team management included.
              </p>
            </div>
          </div>
          <div className={style.verticalcard}>
          <div className={style.leftDiv}>
              <button className={style.btnuseless} style={{backgroundColor:"skyblue"}}>let's Connect</button>
              <h1>Enterprises plan</h1>
              <p>
               Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for succcess
              </p>
              <Button style={{backgroundColor:"skyblue"}} text={"Contact Us"}/>
            </div>
            <div className={style.rightDiv}>
              <p>What you'l gate :</p>
              <div className={style.para}>
                <BiUser /> Upto 25 users
              </div>
              <p>
              <RiCheckDoubleLine/> Custumization of all other features
              </p>
             
            </div>
          </div>
        </div>
      </div>
      <p className={style.note}>
        *some unique features are provided as add-ons with individual plans for each features
      </p>
    </div>
  );
}

export default Body;
