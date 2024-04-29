import React, {useState} from 'react'
import style from './FAQ.module.scss'
import {Arrow} from "../Header/Svgs";
import {useTranslation} from "react-i18next";

const FAQ = ({blockRef4}) => {
    const [firstOpen, setFirstOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)
    const [thirdOpen, setThirdOpen] = useState(false)
    const [fouthOpen, setFourthOpen] = useState(false)
    const {t} = useTranslation()
    return (
        <div className={style.faq} ref={blockRef4}>
            <div className={style.title}>
                <p>{t("Frequently Asked Questions ")}<span>{t("questions")}</span></p>
            </div>
            <div className={style.item} style={{borderTop: "1px solid black"}}>
                <div className={style.wrapp}>
                    <p>{t("How much do your services cost, what % is the commission?")}</p>
                    <div onClick={() => setFirstOpen((firstOpen) => !firstOpen)}
                         className={`${style.btn} ${firstOpen ? style.opened : ""}`}>
                        <Arrow/>
                    </div>
                </div>
                {
                    firstOpen && (
                        <div className={style.information}>
                            <p>{t("Searching up to 3 products is free of charge, then for each product $3 . - Our commission from 5% to 10% depending on the amount of goods and complexity of the work.")}
                            </p>
                        </div>
                    )
                }
            </div>
            <div className={style.item}>
                <div className={style.wrapp}>
                    <p>{t("How long does it take for delivery, what are the methods?")}</p>
                    <div onClick={() => setSecondOpen((secondOpen) => !secondOpen)}
                         className={`${style.btn} ${secondOpen ? style.opened : ""}`}>
                        <Arrow/>
                    </div>
                </div>
                {
                    secondOpen && (
                        <div className={style.information}>
                            <p>{t("- There are several ways to ship goods from China:")}<br/></p>
                            <p>{t("Sea freight - this is the most popular way to ship large shipments from China.")}<br/>
                            </p>
                            <p>{t("Railways - more popular for shipping cargo from China, especially for medium-sized cargo.")}<br/>
                            </p>
                            <p>{t("Air transport - the fastest, but also more expensive option for delivery of cargo from China.")}<br/>
                            </p>
                            <p>{t("Road transport - the speed is inferior to air transport, used for delivery of medium and small-sized cargo from China.")}<br/>
                            </p>
                            <p>{t("- Delivery time may vary depending on many factors, including distance, customs procedures and other circumstances, you can check with our manager.")}<br/>
                            </p>
                            <p>{t("How much does logistics cost? To China/to my country?")}<br/></p>
                            <p>{t("- To China - depends on the location of the factory, the further the factory is from our warehouse/shipping port, the more expensive it is.")}<br/>
                            </p>
                            <p>{t("- To my country - there is no certain rate for KG, each product is calculated separately, you need to understand the dimensions of the cargo and its weight, what type of goods, route and many other factors. All this is calculated individually.")}                            </p>
                        </div>
                    )
                }
            </div>
            <div className={style.item}>
                <div className={style.wrapp}>
                    <p>{t("Are there any seasonal difficulties with delivery of goods from China?")}</p>
                    <div onClick={() => setThirdOpen((thirdOpen) => !thirdOpen)}
                         className={`${style.btn} ${thirdOpen ? style.opened : ""}`}>
                        <Arrow/>
                    </div>
                </div>
                {
                    thirdOpen && (
                        <div className={style.information}>
                            <p>{t("-Yes, there are some seasonal difficulties that can affect the delivery of goods from China:")}<br/></p>
                            <p>{t("Chinese New Year: During Chinese New Year celebrations (usually in February), many businesses, including factories and warehouses, suspend operations for several weeks. This can cause delays in the production and dispatch of goods.")}<br/></p>
                            <p>{t("Peak seasons: During periods of high demand, such as Christmas, Black Friday or other major global events, there can be a high volume of cargo traffic, resulting in delays in deliveries due to congested ports, warehouses and vehicles.")}<br/></p>
                            <p>{t("Weather conditions: Some modes of transport may face difficulties due to weather conditions, especially in winter, which can lead to delays in delivery.")}<br/></p>
                            <p>{t("It is important to keep these seasonal factors in mind when planning shipments from China and factor them into your delivery schedule.")}<br/></p>
                        </div>
                    )
                }
            </div>
            <div className={style.item}>
                <div className={style.wrapp}>
                    <p>{t("What guarantees are provided by you and your partner suppliers?")}</p>
                    <div onClick={() => setFourthOpen((fouthOpen) => !fouthOpen)}
                         className={`${style.btn} ${fouthOpen ? style.opened : ""}`}>
                        <Arrow/>
                    </div>
                </div>
                {
                    fouthOpen && (
                        <div className={style.information}>
                            <p>{t("- Everything will be fair due to the following guarantees:")}<br/></p>
                            <p>{t("Contract: Conclusion of a written contract that clearly spells out all the terms of co-operation, rights and obligations of each party.")}<br/></p>
                            <p>{t("Adherence to Laws: Assurance that partners and suppliers follow the law and international standards in their activities.")}<br/></p>
                            <p>{t("Transparency: Providing accountability and transparency in the document flow, which allows to control the supply chain and operations.")}<br/></p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FAQ