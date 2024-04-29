import React from 'react'
import s from './Header.module.scss'
import {NavLink, useNavigate} from "react-router-dom";
import lushi from '../../assets/Group 14.png'
import rus from '../../assets/flag-for-flag-russia-svgrepo-com.png'
import us from '../../assets/flag-us-svgrepo-com.png'
import {setCookie} from "nookies";
import {useTranslation} from "react-i18next";

const HeaderResponsive = ({setModal}) => {
    const navigate = useNavigate()
    return (
        <div className={s.responsiveHeaderWrapper}>
            <div className={s.responsiveHeader}>
                <div onClick={() => setModal(true)}>
                    <img src={"https://i.ibb.co/Sr9DGwd/image.png"} alt="menu" className={s.menu}/>
                </div>
                <div className={s.imgDiv}>
                    <img src={lushi} className={s.image2} alt={"logo"}
                         onClick={() => navigate('/')}/>
                </div>
                <div className={s.textLang}>
                    <div className={s.imgs}>
                        <img className={s.ru} src={rus} alt={"/"}/>
                        <img src={us} alt={"/"}/>
                    </div>
                    <p className={s.ru} onClick={() => {
                        setCookie(null, 'lang', "ru", {
                            path: '/'
                        })
                        window.location.reload()
                    }}>Rus</p>
                    <p className={s.slash}>/</p>
                    <p className={s.us} onClick={() => {
                        setCookie(null, 'lang', "en", {
                            path: '/'
                        })
                        window.location.reload()
                    }}>Eng</p>
                </div>
            </div>
        </div>
    )
}


const Header = ({setModal, scrollTo, blockRef1, blockRef2, blockRef3, blockRef4, blockRef5}) => {
    const navigate = useNavigate()
    const {t} = useTranslation()

    return (
        <>
            <div className={s.headerWrapper}>
                <div className={s.headerDiv}>
                    <img src={lushi} className={s.image} alt={"logo"} onClick={() => navigate('/')}/>
                    <div className={s.links}>
                        <a onClick={() => scrollTo(blockRef1.current)}>{t("About company")}</a>
                        <a onClick={() => scrollTo(blockRef2.current)}>{t("Services")}</a>
                        <a onClick={() => scrollTo(blockRef3.current)}>{t("Reviews")}</a>
                        <a onClick={() => scrollTo(blockRef4.current)}>F.A.Q</a>
                        <a onClick={() => scrollTo(blockRef5.current)}>{t("Contacts")}</a>
                    </div>
                    <div className={s.langDiv}>
                        <div className={s.imgs}>
                            <img src={rus} alt={"/"}/>
                            <img className={s.us} src={us} alt={"/"}/>
                        </div>
                        <div className={s.textLang}>
                            <p className={s.ru} onClick={() => {
                                setCookie(null, 'lang', "ru", {
                                    path: '/'
                                })
                                window.location.reload()
                            }}>Rus</p>
                            <p className={s.slash}>/</p>
                            <p className={s.us} onClick={() => {
                                setCookie(null, 'lang', "en", {
                                    path: '/'
                                })
                                window.location.reload()
                            }}>Eng</p>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderResponsive
                setModal={setModal}
                blockRef1={blockRef1} blockRef2={blockRef2} blockRef3={blockRef3} blockRef4={blockRef4}
                blockRef5={blockRef5}
                scrollTo={scrollTo}
            />
        </>
    )
}

export default Header