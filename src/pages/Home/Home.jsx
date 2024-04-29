import React, {useRef, useState} from 'react';
import Layout from "../../layouts/Layout";
import style from './Home.module.scss'
import lushiBg from '../../assets/Group 8.png'
import conveyor from '../../assets/belt-conveyor-1-svgrepo-com 1.png'
import box from '../../assets/box-1-svgrepo-com 1.png'
import truck from '../../assets/delivery-truck-shipping-courier1.png'
import map from '../../assets/find-on-map-svgrepo-com 1.png'
import Slider from "../../components/Slider/Slider";
import CallbackBlock from '../../components/CallbackBlock/CallbackBlock';
import Feedback from '../../components/Feedback/Feedback';
import Stages from '../../components/Stages/Stages';
import FAQ from '../../components/FAQ/FAQ';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import FeedbackModal from '../../components/Modals/FeedbackModal/FeedbackModal';
import tg from '../../assets/telegram-svgrepo-com.png'
import inst from '../../assets/instagram-svgrepo-com.png'
import viber from '../../assets/viber-svgrepo-com.png'
import {useTranslation} from "react-i18next";
import AboutCompany from '../../components/AboutCompany/AboutCompany';

const Home = () => {
    const [modal, setModal] = useState(false)
    const {t} = useTranslation()
    gsap.registerPlugin(ScrollToPlugin)
    const blockRef1 = useRef(null)
    const blockRef2 = useRef(null)
    const blockRef3 = useRef(null)
    const blockRef4 = useRef(null)
    const blockRef5 = useRef(null)
    const scrollTo = (target) => gsap.to(window, {duration: 1, scrollTo: target})

    return (
        <Layout
            blockRef1={blockRef1} blockRef2={blockRef2} blockRef3={blockRef3} blockRef4={blockRef4}
            blockRef5={blockRef5}
            scrollTo={scrollTo}
        >
            <FeedbackModal modal={modal} setModal={setModal}/>
            <div className={style.container}>
                <img className={style.img} src={lushiBg} alt="/"/>
                <div className={style.textDiv}>
                    <p>{t("International trading company")}</p>
                </div>
                <div className={style.infoDiv}>
                    <div>
                        <img src={conveyor} alt="/"/>
                        <p>{t("Production of customised goods")}</p>
                    </div>
                    <div>
                        <img src={box} alt="/"/>
                        <p>{t("Redemption of goods and quality check")}</p>
                    </div>
                    <div>
                        <img src={map} alt="/"/>
                        <p>{t("Search for a manufacturer")}</p>
                    </div>
                    <div>
                        <img src={truck} alt="/"/>
                        <p>{t("Fast and reliable delivery of goods")}</p>
                    </div>
                </div>
                <div className={style.socialsDiv}>
                    <div className={style.iconDiv}>
                        <img src={tg} alt="/"/>
                    </div>
                    <div className={style.iconDiv}>
                        <img src={inst} alt="/"/>
                    </div>
                    <div className={style.iconDiv}>
                        <img src={viber} alt="/"/>
                    </div>
                </div>
                <div className={style.btnDiv}>
                    <button onClick={() => setModal(true)}>{t("Discuss the interaction")}</button>
                </div>
                <AboutCompany blockRef1={blockRef1}/>
                <Slider/>
                <CallbackBlock blockRef2={blockRef2}/>
                <Feedback/>
                <Stages/>
                <FAQ blockRef4={blockRef4}/>
            </div>
        </Layout>
    );
};

export default Home;
