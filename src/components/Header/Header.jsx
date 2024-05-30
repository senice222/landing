import React from 'react'
import s from './Header.module.scss'
import lushi from '../../assets/Group 14.png'
import rus from '../../assets/flag-for-flag-russia-svgrepo-com.png'
import us from '../../assets/flag-us-svgrepo-com.png'
import { parseCookies, setCookie } from "nookies";
import { useTranslation } from "react-i18next";
import burger from '../../assets/free-icon-menu-4254068.png'

const HeaderResponsive = ({ setModal, blockRef6, scrollTo }) => {
    const { lang } = parseCookies()

    return (
        <div className={s.responsiveHeaderWrapper}>
            <div className={s.responsiveHeader}>
                <div onClick={() => setModal(true)} className={s.burgerIcon}>
                    <img src={burger} alt="menu" className={s.menu} />
                </div>
                <div className={s.imgDiv} onClick={() => scrollTo(blockRef6?.current)} >
                    <img src={lushi} className={s.image2} alt={"logo"} />
                </div>
                <div className={s.textLang}>
                    <div className={s.imgs}>
                        <img className={s.ru} src={rus} alt={"/"} onClick={() => {
                        setCookie(null, 'lang', "ru", {
                            path: '/'
                        })
                        window.location.reload()
                    }} />
                        <img src={us} alt={"/"} onClick={() => {
                        setCookie(null, 'lang', "en", {
                            path: '/'
                        })
                        window.location.reload()
                    }} />
                    </div>
                    <p className={lang === 'ru' ? `${s.active} ${s.ru}` : s.ru} onClick={() => {
                        setCookie(null, 'lang', "ru", {
                            path: '/'
                        })
                        window.location.reload()
                    }}>Rus</p>
                    <p className={s.slash}>/</p>
                    <p className={lang === 'en' ? `${s.active} ${s.en}` : s.en} onClick={() => {
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


const Header = ({ setModal, scrollTo, blockRef1, blockRef2, blockRef3, blockRef4, blockRef5, blockRef6 }) => {
    const { t } = useTranslation()
    const { lang } = parseCookies()

    return (
        <>
            <div className={s.headerWrapper}>
                <div className={s.headerDiv}>
                    <img src={lushi} className={s.image} alt={"logo"} />
                    <div className={s.links}>
                        <a onClick={() => scrollTo(blockRef1.current)}>{t("About company")}</a>
                        <a onClick={() => scrollTo(blockRef2.current)}>{t("Services")}</a>
                        <a onClick={() => scrollTo(blockRef3.current)}>{t("Reviews")}</a>
                        <a onClick={() => scrollTo(blockRef4.current)}>F.A.Q</a>
                        <a onClick={() => scrollTo(blockRef5.current)}>{t("Contacts")}</a>
                    </div>
                    <div className={s.langDiv}>
                        <div className={s.imgs}>
                            <img src={rus} alt={"/"} />
                            <img className={s.us} src={us} alt={"/"} />
                        </div>
                        <div className={s.textLang}>
                            <p className={lang === 'ru' ? `${s.active} ${s.ru}` : s.ru} onClick={() => {
                                setCookie(null, 'lang', "ru", {
                                    path: '/'
                                })
                                window.location.reload()
                            }}>Rus</p>
                            <p className={s.slash}>/</p>
                            <p className={lang === 'en' ? `${s.active} ${s.us}` : s.us} onClick={() => {
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
                blockRef6={blockRef6}
                scrollTo={scrollTo}
            />
        </>
    )
}

export default Header