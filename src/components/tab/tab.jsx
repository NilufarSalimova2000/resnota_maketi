import React from "react";
import style from "./tab.module.scss"

export const TabCard = ({img,  title, info, price }) => {
    return (
      <>
        <div className={style.block}>
          <img className={style.img} src={img} alt="#" />
          <div className={style.contentBlock}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.text}>{info}</p>
            <p className={style.price}>{price} ₽</p>
            <div className={style.innerFLex}>
              <p className={style.prprice}>
                660 <span className={style.rubl}>₽</span>
              </p>
              <div className={style.discount}>
                <p className={style.dis}>-15%</p>
                <p className={style.econom}>
                  Экономия 160 <span className={style.rubl}>₽</span>
                </p>
              </div>
            </div>
            <div className={style.btns}>
              <button className={style.buyBtn}>Купить</button>
              <button className={style.ClickBtn}>В 1 клик</button>
            </div>
          </div>
        </div>
      </>
    );
  };