import React from "react";
import { Header } from "../../layout/header";
import { Banner } from "../../components/banner";
import { data } from "../../data/data";
import { CategoryCard } from "../../components/card/category_card";
import style from "./home.module.scss";
import { TabList } from "../../layout/Tab";
import { Questions } from "../../components/questions";
import { Footer } from "../../layout/footer";

export const Home = () => {
    console.log(data);
    return (
        <>
            <Header />
            <Banner />
            <div className="container">
            <div className={style.card_list}>
                {data?.map((item) => {
                    return <CategoryCard key={item.id} title={item.title} info={item.info} img={item.img} />
                })}
            </div>
            </div>
            <TabList />
            <Questions />
            <Footer />
        </>
    )
}