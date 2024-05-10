import React from 'react'
import style from '../../pages/Home/Home.module.scss'
import {useTranslation} from "react-i18next";
import lushiBg from '../../assets/Group 8.png'
import conveyor from '../../assets/belt-conveyor-1-svgrepo-com 1.png'
import box from '../../assets/box-1-svgrepo-com 1.png'
import truck from '../../assets/delivery-truck-shipping-courier1.png'
import map from '../../assets/find-on-map-svgrepo-com 1.png'
import globus from '../../assets/planet-svgrepo-com 1.png'
import tg from '../../assets/telegram-svgrepo-com.png'
import inst from '../../assets/instagram-svgrepo-com.png'
import viber from '../../assets/viber-svgrepo-com.png'

const TopComponent = ({setModal}) => {
    const {t} = useTranslation()

    return (
        <>
            <img className={style.img} src={lushiBg} alt="/" />
            <div className={style.textDiv}>
                <p>International trading company</p>
            </div>
            <div className={style.infoDiv}>
                <div>
                    <img src={conveyor} className={style.conveyor} alt="/" />
                    <p>{t("Production of customised goods")}</p>
                </div>
                <div>
                    <img src={box} alt="/" />
                    <p>{t("Redemption of goods and quality check")}</p>
                </div>
                <div>
                    <img src={globus} alt="/" />
                    <p className={style.searchManufaktura}>{t("Search for a manufacturer")}</p>
                </div>
                <div>
                    <img src={truck} alt="/" />
                    <p>{t("Fast and reliable delivery of goods")}</p>
                </div>
            </div>
            <div className={style.socialsDiv}>
                <div className={style.iconDiv}>
                    <img src={tg} alt="/" />
                </div>
                <div className={style.iconDiv}>
                    <img src={inst} alt="/" />
                </div>
                <div className={style.iconDiv}>
                    <img src={viber} alt="/" />
                </div>
            </div>
            <div className={style.btnDiv}>
                <button onClick={() => setModal(true)}>{t("Discuss the interaction")}</button>
            </div>
        </>
    )
}

export default TopComponent