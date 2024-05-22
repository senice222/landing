import s from './Burger.module.scss'

const BurgerModal = ({ opened, setOpened, scrollTo, blockRef1, blockRef2, blockRef4, blockRef5 }) => {

    return (
        <div onClick={(prev) => setOpened(!prev)} className={`${s.bgModal} ${opened ? s.opened : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={`${s.content} ${opened ? s.contentOpened : ""}`}>
                <div className={s.top}>
                    <div className={s.header}>
                        <h2>Меню</h2>
                    </div>
                    <div className={s.links}>
                        <a onClick={() => {
                            scrollTo(blockRef1?.current)
                            setOpened(false)
                        }}>О компании</a>
                        <a onClick={() => {
                            scrollTo(blockRef2?.current)
                            setOpened(false)
                        }}>Услуги</a>
                        <a onClick={() => {
                            scrollTo(blockRef1?.current)
                            setOpened(false)
                        }}>Отзывы</a>
                        <a onClick={() => {
                            scrollTo(blockRef4?.current)
                            setOpened(false)
                        }}>F.A.Q</a>
                        <a onClick={() => {
                            scrollTo(blockRef5?.current)
                            setOpened(false)
                        }}>Контакты</a>
                    </div>
                </div>
                <div className={s.bottom} onClick={() => window.location.href = 'tel:+375291384557'}>
                    <div className={s.line} />
                    <div className={s.catalog}>Наш номер телефона</div>
                    <h1 className={s.number}>+375(291) - 384 - 557</h1>
                </div>
            </div>
        </div>
    )
}

export default BurgerModal