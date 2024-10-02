import React from "react";
import style from "./Tab.module.scss"
import { Tab } from "../../data/data";
import { Tab2 } from "../../data/data";
import { Tab3 } from "../../data/data";
import { TabCard } from "../../components/tab";

export const TabList = () => {
    const [count, setCount] = React.useState(1);
    return (
      <>
        <div className={style.btnBlock}>
          <button
            className={style.btn}
            style={{
              backgroundColor: count == 1 ? "white" : "",
              border: count == 1 ? "2px solid #EFF2F4" : "",
            }}
            onClick={() => setCount(1)}
          >
            Хиты
          </button>
          <button
            className={style.btn}
            style={{
              backgroundColor: count == 2 ? "white" : "",
              border: count == 2 ? "2px solid #EFF2F4" : "",
            }}
            onClick={() => setCount(2)}
          >
            Скидки
          </button>
          <button
            className={style.btn}
            style={{
              backgroundColor: count == 3 ? "white" : "",
              border: count == 3 ? "2px solid #EFF2F4" : "",
            }}
            onClick={() => setCount(3)}
          >
            Новинки
          </button>
        </div>
        {count == 1 && (
          <div>
            <div className={style.Block}>
              <div className="container">
                <div className={style.TabBlock}>
                  {Tab.map((item) => (
                    <TabCard
                      key={item.id}
                      text={item.info}
                      title={item.title}
                      img={item.img}
                      price={item.price}
                      style={{ color: "blue" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {count == 2 && (
          <div className={style.tabBlock}>
            <div className={style.Block}>
              <div className="container">
                <div className={style.TabBlock}>
                  {Tab2.map((item) => (
                    <TabCard
                      key={item.id}
                      text={item.info}
                      title={item.title}
                      img={item.img}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {count == 3 && (
          <div className={style.Block}>
            <div className="container">
              <div className={style.TabBlock}>
                {Tab3.map((item) => (
                  <TabCard
                    key={item.id}
                    text={item.info}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };