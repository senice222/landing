import React from 'react'
import style from './AboutCompany.module.scss'
import img from '../../assets/персонаж о компании.png'
import { useTranslation } from 'react-i18next'

const AboutCompany = ({blockRef1}) => {
    const {t} = useTranslation()
    return (
        <div className={style.container} ref={blockRef1}>
            <div className={style.text}>
                <p className={style.title}>{t("ABOUT THE COMPANY")}</p>
                <p className={style.descr}>
                    {t("We are pleased to welcome you to the company ")} <span>"LUSHI"</span> {t(" - your reliable partner in international trade!")}
                </p>
                <p className={style.descr}>
                    {t("Company ")} <span>"LUSHI"</span> {t(" provides a range of services for companies and entrepreneurs, from finding a reliable manufacturer.and purchase of goods and finishing with delivery of goods to your country. Also, the company has close business relations with a lot of factories in China, capable of manufacturing goods on individual orders.")}
                </p>
                <p className={style.descr}>
                    {t("Founder of the company ")} <span>"LUSHI"</span> {t(" has been working for over 10 years in the field of international trade with China. This guarantees high level of experience and professionalism of our team. In addition, his ownership of a major transport company in China. called ‘LMT International Logistics Services Co., Ltd.’, ensures the ability to provide reliable services and competitive rates in the logistics industry.")}
                </p>
            </div>
            <div className={style.imgDiv}>
                <img src={img} alt='/'/>
            </div>
        </div>
    )
}


export default AboutCompany