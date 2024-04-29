import React, { useState } from 'react'
import style from '../../pages/Home/Home.module.scss'
import woman from '../../assets/Woman.png'
import man from '../../assets/Man.png'
import CompanySlider from '../../components/CompanySlider/CompanySlider';
import Quiz from '../Quiz/Quiz';
import SecondItem from '../Quiz/Items/SecondItem/SecondItem';
import ThirdItem from '../Quiz/Items/ThirdItem/ThirdItem';
import {useTranslation} from "react-i18next";

const CallbackBlock = ({blockRef2}) => {
    const [step, setStep] = useState(0)
    const {t} = useTranslation()
    const objSteps = {
        0: <Quiz step={step} setStep={setStep} />,
        1: <SecondItem setStep={setStep} />,
        2: <ThirdItem setStep={setStep} />
    }
    const CurrentStep = objSteps[step]

    return (
        <div className={style.callbackBlock}>
            {CurrentStep}
            <div className={style.searchPostavshikovBlock} ref={blockRef2}>
                <img src={woman} alt="/" />
                <div className={style.wrapper}>
                    <div className={style.list}>
                        <h4>{t("Finding reliable suppliers")}</h4>
                        <ul>
                            <li>
                                {t("We will search for reliable suppliers in China in maximum 3 days.")}<br />
                                {t("We will find several suppliers of the goods you need and check them for reliability")}
                            </li>
                            <li>{t("We will talk to the factories to get the best price and agree favourable terms of cooperation for you.")}</li>
                            <li>{t("We will come with inspection to the factory")}</li>
                        </ul>
                    </div>
                    <div className={style.list}>
                        <h4 className={style.titleList}>{t("Production of goods to individual order:")}</h4>
                        <ul>
                            <li>
                                {t("We will hold a detailed discussion of all parameters and characteristics that should be taken into account when creating the goods.")}
                            </li>
                            <li>{t("We will find a factory to produce goods according to the developed specifications and design.")}</li>
                            <li>{t("Проконтролируем этапы производства")}</li>
                            <li>{t("We will ensure delivery of the finished goods to the place specified by you.")}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.line}>
                <div />
            </div>
            <div className={style.secondBlockPostavshiki}>
                <div className={style.wrapper}>
                    <div className={style.list}>
                        <h4 className={style.titleList}>{t("Buyback of goods and quality inspection")}</h4>
                        <ul>
                            <li>
                                {t("We will buy the necessary goods from the manufacturer in the required quantity. and carry out an inspection at the factory.")}
                            </li>
                            <li>{t("We will carry out an inventory - take the goods, count them, send a video report.")}</li>
                            <li>{t("Check for rejects.")}</li>
                            <li>{t("We will pack and prepare for dispatch.")}</li>
                        </ul>
                    </div>
                    <div className={style.list}>
                        <h4 className={style.titleList}>{t("Fast and reliable delivery of goods")}</h4>
                        <ul>
                            <li>
                                {t("We will control the whole delivery process thanks to our own transport company LMT.")}
                            </li>
                            <li>{t("We use optimal delivery routes to ensure fast and safe delivery of your goods.")}</li>
                            <li>{t("We will take into account all the peculiarities of your shipment to choose the best delivery method and prevent possible delays or problems.")}</li>
                            <li>{t("Provide shipment tracking so you can rest assured that your shipment is securely controlled and will arrive on time.")}</li>
                            <li>{t("We guarantee that your shipment will be delivered safely and securely and you will receive it on time.")}</li>
                        </ul>
                    </div>
                </div>
                <img src={man} alt="/" />
            </div>
            {/* <CompanySlider /> */}
        </div>
    )
}

export default CallbackBlock