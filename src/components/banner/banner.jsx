import React from "react";
import style from "../banner/banner.module.scss";

export const Banner = () => {
    return (
        <section className={style.banner_main}>
            <div className="container">
                <h2 className={style.title}>Истина в качестве</h2>
                <p className={style.text}>КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ: КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ</p>
                <a className={style.btn} href="#">Купить</a>
            </div>
        </section>
    )
}