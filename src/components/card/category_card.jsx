import React from "react";
import style from "../card/category_card.module.scss"

export const CategoryCard = ({ id, title, info, img }) => {
    return (
        <section className={style.block}>
            <div className="container">
                <div className={style.item}>
                    <div>
                        <h3 className={style.title}>{title}</h3>
                        <p className={style.info}>{info}</p>
                    </div>
                    <div>
                        <img src={img} alt="img" />
                    </div>

                </div>
            </div>
        </section>
    )
}