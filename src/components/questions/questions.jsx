import React from "react";
import style from "./questions.module.scss";
import icon from "../../assets/questions_icon.svg"

export const Questions = () => {
    return (
        <>
          <div className={style.MainBlock}>
            <div className="container">
              <div className={style.block}>
                <div className={style.contentBlock}>
                  <h3 className={style.title}>Есть вопросы?</h3>
                  <p className={style.text}>
                    Оставьте свои данные и наш менеджер свяжется с вами в ближайшее
                    время.
                  </p>
                </div>
                <div>
                  <a href="#">
                    <img src={icon} alt="#" />
                  </a>
                </div>
                <form>
                  <div className={style.inputs}>
                    <div className={style.inputMini}>
                      <input
                        className={style.input}
                        type="text"
                        placeholder="Ваше имя"
                      />
                      <input
                        className={style.input}
                        type="text"
                        placeholder="Телефон/E-mail"
                      />
                    </div>
                    <div className={style.txarea}>
                      <textarea
                        type="text"
                        placeholder="Комментарий"
                        className={style.comment}
                        rows={12}
                        cols={20}
                      />
                    </div>
                  </div>
                  <div className={style.checks}>
                    <div className={style.checkboxBlock}>
                      <input
                        className={style.check}
                        id="checkbox1"
                        type="checkbox"
                      />
                      <label className={style.label} htmlFor="checkbox1"></label>
                      <p className={style.inputText}>
                        Даю согласие на обработку моих персональных данных
                      </p>
                    </div>
                    <div className={style.checkboxBlock1}>
                      <input
                        className={style.check}
                        id="checkbox2"
                        type="checkbox"
                      />
                      <label className={style.label} htmlFor="checkbox2"></label>
                      <p className={style.inputText}>
                        Даю согласие на обработку моих персональных данных
                      </p>
                    </div>
                  </div>
                  <button type="submit" className={style.formBnt}>
                  Отправить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
    )
}