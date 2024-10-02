import React from "react";
import style from "../header/header.module.scss";
import Logo from "../../assets/header_logo.svg";
import Star from "../../assets/header_star.svg";
import Vector from "../../assets/header_icon.svg";
import { Navbar } from "../../components/navbar";

export const Header = () => {
    return (
        <header>
            <div className={style.header_main}>
                <div className="container">
                    <div className={style.header_wrapper}>
                        <div className={style.logo_wrapper}>
                            <a href="#">
                                <img src={Logo} alt="logo" />
                            </a>
                            <p className={style.header_info}>Колбасы и мясные деликатесы</p>
                        </div>
                        <div className={style.block}>
                            <a href="#">
                                <img src={Star} alt="icon" />
                            </a>
                            <div className={style.info_block}>
                                <a className={style.icon_btn} href="#">
                                    <img src={Vector} alt="icon" />
                                </a>
                                <div>
                                    <p className={style.info}>Товаров: 3 </p>
                                    <p className={style.price}>6 540 ₽</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar/>
        </header>
    )
}