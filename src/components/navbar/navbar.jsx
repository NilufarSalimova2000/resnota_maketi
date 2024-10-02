import React from "react";
import style from "../navbar/navbar.module.scss";
import Search from "../../assets/header_search.svg"

export const Navbar = () => {
    return (
        <div className={style.header_bottom}>
            <div className="container">
                <div className={style.block}>
                    <nav>
                        <div className={style.link_list}>
                            <a className={style.link} href="#">О ресноте</a>
                            <a className={style.link} href="#"> Каталог</a>
                            <a className={style.link} href="#"> Наш магазины</a>
                            <a className={style.link} href="#">Контакты</a>
                        </div>
                    </nav>
                    <div className={style.input_block}>
                        <input className={style.input} placeholder="Поиск по сайту" type="text" />
                        <img className={style.input_icon} src={Search} alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}