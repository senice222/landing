import React from 'react'
import style from './Footer.module.scss'
import lushi from '../../assets/Group 14logo.png'
import map from '../../assets/location-sign-svgrepo-com 1.png'
import { NavLink } from 'react-router-dom'
import tg from '../../assets/telegram-svgrepo-com (1).png'
import inst from '../../assets/instagram-svgrepo-com (1).png'
import viber from '../../assets/viber-svgrepo-com (1).png'
import {useTranslation} from "react-i18next";

const Footer = ({blockRef5, scrollTo, blockRef1, blockRef2, blockRef3, blockRef4}) => {
    // СДЕЛАТЬ ДИПЛИНКИ
    const {t} = useTranslation()

    return (
        <footer className={style.footer} ref={blockRef5}>
            <div className={style.items}>
                <div className={style.topBlocks}>
                    <div className={style.firstBlock}>
                        <img src={lushi} alt="/" />
                        <div className={style.info}>
                            <p>{t("Mail")}: lushi.minsk@gmail.com</p>
                            <p>{t("Phone:")} +375(000) - 00 - 00</p>
                            <p>Tel:4008001187</p>
                            <p>{t("Accepting applications:")} 24/7</p>
                        </div>
                    </div>
                    <div className={style.secondBlock}>
                        <img src={map} alt="/" />
                        <p>
                            <span>Адрес: 220089 г. Минск, ул. Железнодорожная, д. 33А, каб. 402</span>
                        </p>
                    </div>
                </div>
                <div className={style.bottomSide}>
                    <div className={style.links}>
                        <a onClick={() => scrollTo(blockRef1.current)}>{t("About company")}</a>
                        <a onClick={() => scrollTo(blockRef2.current)}>{t("Services")}</a>
                        <a onClick={() => scrollTo()}>{t("Reviews")}</a>
                        <a onClick={() => scrollTo()}>F.A.Q</a>
                    </div>
                    <div className={style.icons}>
                        <img src={tg} alt="/" />
                        <img src={inst} alt="/" />
                        <img src={viber} alt="/" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer