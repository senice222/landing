import React from 'react'
import style from '../../pages/Home/Home.module.scss'
import { useTranslation } from "react-i18next";
import lushiBg from '../../assets/Group 8.png'
import conveyor from '../../assets/belt-conveyor-1-svgrepo-com 1.png'
import box from '../../assets/box-1-svgrepo-com 1.png'
import truck from '../../assets/delivery-truck-shipping-courier1.png'
import map from '../../assets/find-on-map-svgrepo-com 1.png'
import globus from '../../assets/planet-svgrepo-com 1.png'
import tg from '../../assets/telegram-svgrepo-com.png'
import inst from '../../assets/instagram-svgrepo-com.png'
import viber from '../../assets/viber-svgrepo-com.png'
import { motion } from 'framer-motion'

const TopComponent = ({ blockRef1, setModal }) => {
    const { t } = useTranslation()

    return (
        <>
            <motion.div
                className={style.imgDiv}
            >
                <img
                    className={style.img} src={lushiBg} alt="/"
                />
            </motion.div>
            <div className={style.textDiv}>
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                >
                    International trading company
                </motion.p>
            </div>
            <div className={style.infoDiv}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                >
                    <img src={conveyor} className={style.conveyor} alt="/" />
                    <p>{t("Production of customised goods")}</p>
                </motion.div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                >
                    <img src={box} alt="/" />
                    <p>{t("Redemption of goods and quality check")}</p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                >
                    <img src={globus} alt="/" />
                    <p className={style.searchManufaktura}>{t("Search for a manufacturer")}</p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                >
                    <img src={truck} alt="/" />
                    <p>{t("Fast and reliable delivery of goods")}</p>
                </motion.div>
            </div>
            <motion.div className={style.socialsDiv}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
            >
                <div className={style.iconDiv}>
                    <img src={tg} alt="/" />
                </div>
                <div className={style.iconDiv}>
                    <img src={inst} alt="/" />
                </div>
                <div className={style.iconDiv}>
                    <img src={viber} alt="/" />
                </div>
            </motion.div>
            <motion.div className={style.btnDiv}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
            >
                <button ref={blockRef1} onClick={() => setModal(true)}>{t("Discuss the interaction")}</button>
            </motion.div>
        </>
    )
}

export default TopComponent