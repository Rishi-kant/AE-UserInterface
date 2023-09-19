import React from "react";
import style from "./Body.module.css";
import Card from "../card/card";
function Body() {
  return (
    <div className={style.container}>
      <div className={style.infosec}>
        <div>
          <h2>Choose a plan that's just right for you !</h2>
        </div>
        <div className={style.buttonsDiv}>
          <button className={style.btn}>Monthly</button>
          <button className={style.btn}>Annually</button>
        </div>
      </div>
      <div className={style.contentdiv}>
        <div className={style.plansDiv}>
          
          <Card />
          <Card />
          <Card />
        </div>
        <div className={style.lowerDiv}>
          <div className={style.verticalcard}
             >
              <div>
               <button>free forever</button>
              </div>
              <div>

              </div>
             </div>
          <div className={style.verticalcard}></div>
        </div>
      </div>
    </div>
  );
}

export default Body;
