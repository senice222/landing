import React from 'react'
import style from './Stages.module.scss'
import { useTranslation } from "react-i18next";
import Line from "../Line/Line";
import { motion } from 'framer-motion'

const Stages = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className={style.stagesContainer}>
                <motion.h3
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                >{t("STAGES ")} <span>{t("INTERACTION")}</span></motion.h3>
                <div className={style.itemsContainer}>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                        className={style.item}>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            className={style.headerItem}
                        >
                            <h3>1</h3>
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            >
                                {t("Application")}
                            </motion.p>
                        </motion.div>
                        <div className={style.descr}>
                            {t("After leaving a request we will contact you and offer you to fill in the specification, in which you will have to specify in detail the required goods and their features.")}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                        className={style.item}>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            className={style.headerItem}
                        >
                            <h3>2</h3>
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            >
                                {t("Search for goods")}
                            </motion.p>
                        </motion.div>
                        <div className={style.descr}>
                            {t("We will search for manufacturers of the required goods within three days. After that we will contact you and present the terms and conditions offered by them. The first three products found will be found for you free of charge.")}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                        className={style.item}>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            className={style.headerItem}
                        >
                            <h3>3</h3>
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            >
                                {t("Cost calculation")}
                            </motion.p>
                        </motion.div>
                        <div className={style.descr}>
                            {t("We make calculations on logistics and our commission, specifying at once whether you need additional warehouse services such as barcoding, checking the goods for defects and so on")}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                        className={style.item}>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            className={style.headerItem}
                        >
                            <h3>4</h3>
                            <motion.p
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            >
                                {t("Payment for Services")}
                            </motion.p>
                        </motion.div>
                        <div className={style.descr}>
                            {t("If you agree to our co-operation, you pay the cost of goods and the cost of our services.")}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                        className={style.item}>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            className={style.headerItem}
                        >
                            <h3>5</h3>
                            <motion.p
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            >
                                {t("Redemption of goods")}
                            </motion.p>
                        </motion.div>
                        <div className={style.descr}>
                            {t("We buy a batch of goods from the manufacturer, after which the factory sends it to our warehouse. We accept the goods, make a record and send you a video review.")}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                        className={style.item}>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            className={style.headerItem}
                        >
                            <h3>6</h3>
                            <motion.p
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 0.2 }, ease: "easeIn", duration: 1 }}
                            >
                                {t("Checking and dispatch")}
                                </motion.p>
                        </motion.div>
                        <div className={style.descr}>
                            {t("We recalculate the goods, check for quality on request and send them to your country.")}
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className={style.line} />
        </>
    )
}

export default Stages