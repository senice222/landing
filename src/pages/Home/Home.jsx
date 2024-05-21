import React, {useRef, useState} from 'react';
import Layout from "../../layouts/Layout";
import style from './Home.module.scss'
import Slider from "../../components/Slider/Slider";
import CallbackBlock from '../../components/CallbackBlock/CallbackBlock';
import Feedback from '../../components/Feedback/Feedback';
import Stages from '../../components/Stages/Stages';
import FAQ from '../../components/FAQ/FAQ';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import FeedbackModal from '../../components/Modals/FeedbackModal/FeedbackModal';
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import TopComponent from '../../components/TopComponent/TopComponent';

const Home = () => {
    const [modal, setModal] = useState(false)
    gsap.registerPlugin(ScrollToPlugin)
    const blockRef1 = useRef(null)
    const blockRef2 = useRef(null)
    const blockRef3 = useRef(null)
    const blockRef4 = useRef(null)
    const blockRef5 = useRef(null)
    const blockRef6 = useRef(null)
    const scrollTo = (target) => gsap.to(window, {duration: 1, scrollTo: target})

    return (
        <Layout
            blockRef1={blockRef1} blockRef2={blockRef2} blockRef3={blockRef3} blockRef4={blockRef4}
            blockRef5={blockRef5} blockRef6={blockRef6}
            scrollTo={scrollTo}
        >
            <FeedbackModal modal={modal} setModal={setModal}/>
            <div className={style.container}>
                <TopComponent blockRef1={blockRef1} setModal={setModal} blockRef6={blockRef6}/>
                <AboutCompany />
                <Slider/>
                <CallbackBlock blockRef2={blockRef2}/>
                <Stages/>
                <Feedback/>
                <FAQ blockRef4={blockRef4}/>
            </div>
        </Layout>
    );
};

export default Home;
