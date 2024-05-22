import React from 'react';
import style from "./Slider.module.scss";
import ceo from "../../assets/Rectangle 16.png";
import secondPerson from "../../assets/Rectangle 16 (1).png";
import thirdPerson from "../../assets/Rectangle 16 (2).png";
import fouthPerson from "../../assets/Rectangle 16 (3).png";
import fifthPerson from "../../assets/Rectangle 16 (4).png";

import { Carousel } from 'antd';
import { useTranslation } from "react-i18next";


const Slider = () => {
    const { t } = useTranslation()

    return (
        <>
            <div className={style.wrapper}>
                <Carousel autoplay>
                    <div className={style.sliderDiv}>
                        <div className={style.item}>
                            <img src={secondPerson} alt="/" />
                        </div>
                        <div className={style.informationSliderDiv}>
                            <h3>{t("Lu Zhanqiang")}</h3>
                            <p className={style.ceo}>{t("Founder of the international trading company LUSHI")}</p>
                            <p className={style.descr}>
                                {t("President of the international transport company ‘LMT’. With 16 years of experience in international transport, he has successfully implemented the ‘One Belt, One Road’ initiatives in his company. Lu Zhanqiang is committed to improving trade under this initiative.")}
                            </p>
                        </div>
                    </div>
                    <div className={style.sliderDiv}>
                        <div className={style.item}>
                            <img src={thirdPerson} alt="/" />
                        </div>
                        <div className={style.informationSliderDiv}>
                            <h3>{t("Jiao Jianjian")}</h3>
                            <p className={style.ceo}>{t("Founder of the international trading company LUSHI")}</p>
                            <p className={style.descr}>
                                {t("And other successful businesses. With 15 years of experience in cross-border e-commerce and international trade, she is responsible for integrating resources to provide partners with a supply chain. Jiao Jianjian's philosophy is ‘fair and mutually beneficial co-operation’, which is reflected in the work of LUSHI.")}
                            </p>
                        </div>
                    </div>
                    <div className={style.sliderDiv}>
                        <div className={style.item}>
                            <img src={ceo} alt="/" />
                        </div>
                        <div className={style.informationSliderDiv}>
                            <h3>{t("Evgeny Petrovich Alekseev")}</h3>
                            <p className={style.ceo}>{t("CEO of the Company")}</p>
                            <p className={style.descr}>
                                {t("Responsible for the development of strategic goals. Manages the company's operational activities, including control over business processes and resources, financial resources management.")}
                            </p>
                        </div>
                    </div>
                    <div className={style.sliderDiv}>
                        <div className={style.item}>
                            <img src={fouthPerson} alt="/" />
                        </div>
                        <div className={style.informationSliderDiv}>
                            <h3>{t("Xing Kaizheng")}</h3>
                            <p className={style.ceo}>{t("Head of Customer Relations Department")}</p>
                            <p className={style.descr}>
                                {t("Manages processes related to customer service and assistance in resolving customer issues within China. Provides a high level of customer service.")}
                            </p>
                        </div>
                    </div>
                    <div className={style.sliderDiv}>
                        <div className={style.item}>
                            <img src={fifthPerson} alt="/" />
                        </div>
                        <div className={style.informationSliderDiv}>
                            <h3>{t("Wang Jishuang")}</h3>
                            <p className={style.ceo}>{t("Experienced transport department manager.")}</p>
                            <p className={style.descr}>
                                {t("She is an outstanding logistics professional with extensive experience, responsible for developing and implementing effective logistics strategies. Wang Jishuang has excellent skills in transportation planning, warehouse management and supply chain optimisation for on-time delivery of goods.")}
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
            {/* <div className={style.line}/> */}
        </>
    );
};

export default Slider;
