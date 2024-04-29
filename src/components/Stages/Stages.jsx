import React from 'react'
import style from './Stages.module.scss'
import {useTranslation} from "react-i18next";

const Stages = () => {
    const {t} = useTranslation()
    return (
        <div className={style.stagesContainer}>
            <h3>{t("STAGES ")} <span>{t("INTERACTION")}</span></h3>
            <div className={style.itemsContainer}>
                <div className={style.item}>
                    <div className={style.headerItem}>
                        <h3>1</h3>
                        <p>{t("Application")}</p>
                    </div>
                    <div className={style.descr}>
                        {t("After leaving a request we will contact you and offer you to fill in the specification, in which you will have to specify in detail the required goods and their features.")}
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.headerItem}>
                        <h3>2</h3>
                        <p>{t("Search for goods")}</p>
                    </div>
                    <div className={style.descr}>
                        {t("We will search for manufacturers of the required goods within three days. After that we will contact you and present the terms and conditions offered by them. The first three products found will be found for you free of charge.")}
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.headerItem}>
                        <h3>3</h3>
                        <p>{t("Cost calculation")}</p>
                    </div>
                    <div className={style.descr}>
                        {t("We make calculations on logistics and our commission, specifying at once whether you need additional warehouse services such as barcoding, checking the goods for defects and so on")}
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.headerItem}>
                        <h3>4</h3>
                        <p>{t("Payment for Services")}</p>
                    </div>
                    <div className={style.descr}>
                        {t("If you agree to our co-operation, you pay the cost of goods and the cost of our services.")}
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.headerItem}>
                        <h3>5</h3>
                        <p>{t("Redemption of goods")}</p>
                    </div>
                    <div className={style.descr}>
                        {t("We buy a batch of goods from the manufacturer, after which the factory sends it to our warehouse. We accept the goods, make a record and send you a video review.")}
                    </div>
                </div>
                <div className={style.item}>
                    <div className={style.headerItem}>
                        <h3>6</h3>
                        <p>{t("Checking and dispatch")}</p>
                    </div>
                    <div className={style.descr}>
                        {t("We recalculate the goods, check for quality on request and send them to your country.")}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stages