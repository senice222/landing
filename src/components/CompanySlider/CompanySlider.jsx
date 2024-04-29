import React from 'react'
import style from './CompanySlider.module.scss'
import lushi from '../../assets/Group 14.png'
import { Carousel } from 'antd';
import {useTranslation} from "react-i18next";

const CompanySlider = () => {
    const {t} = useTranslation()

    return (
        <div className={style.carouselWraper}>
            <Carousel className={style.carouselDiv}>
                <div className={style.wrapp}>
                    <div className={style.secondSlider}>
                        <div className={style.shadowDiv}>
                            <div className={style.companyHeader}>
                                <img src={lushi} alt="/" />
                                <div className={style.textDivCompany}>
                                    <h3>{t("ABOUT THE COMPANY")}</h3>
                                </div>
                            </div>
                            <div className={style.description}>
                                <p>
                                    {t("Welcome to the company")}: "<span>LUSHI</span>" - {t("your reliable partner in international trade! We provide a wide range of services, from finding reliable suppliers and purchasing goods, to shipping directly to you.")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.wrapp}>
                    <div className={style.secondSlider}>
                        <div className={style.shadowDiv}>
                            <div className={style.companyHeader}>
                                <img src={lushi} alt="/" />
                                <div className={style.textDivCompany}>
                                    <h3>{t("ABOUT THE COMPANY")}</h3>
                                </div>
                            </div>
                            <div className={style.description}>
                                <p>
                                    {t("Our company has close ties with many factories in China, capable of manufacturing goods according to your individual orders. Company founder ")} "<span>LUSHI</span>" {t(" has more than 10 years of experience in international trade with China, which guarantees our team a high level of professionalism.")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.wrapp}>
                    <div className={style.secondSlider}>
                        <div className={style.shadowDiv}>
                            <div className={style.companyHeader}>
                                <img src={lushi} alt="/" />
                                <div className={style.textDivCompany}>
                                    <h3>{t("ABOUT THE COMPANY")}</h3>
                                </div>
                            </div>
                            <div className={style.description}>
                                <p>
                                    {t("In addition, his own transport company ‘LMT International Logistics Services Co., Ltd’ in China, ensures that we are able to provide reliable logistics services at competitive rates.")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.wrapp}>
                    <div className={style.secondSlider}>
                        <div className={style.shadowDiv}>
                            <div className={style.companyHeader}>
                                <img src={lushi} alt="/" />
                                <div className={style.textDivCompany}>
                                    <h3>{t("ABOUT THE COMPANY")}</h3>
                                </div>
                            </div>
                            <div className={style.description}>
                                <p>
                                    {t("Our company is based on the principles of innovation, honesty, co-operation and mutually beneficial relationship. We create great value for our customers and partners by providing services with heart and endeavouring to meet their needs.")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel>
            <div className={style.line}>
                <div />
            </div>
        </div>
    )
}

export default CompanySlider