import React, {useState} from 'react';
import Header from "../components/Header/Header";
import style from './Layout.module.scss'
import BurgerModal from "../components/Header/Burger/Burger";
import Footer from '../components/Footer/Footer';

const Layout = ({children, blockRef1, blockRef2, blockRef3, blockRef4, blockRef5, scrollTo}) => {
    const [opened, setOpened] = useState(false)

    return (
        <>
            <Header
                setModal={setOpened} scrollTo={scrollTo}
                blockRef1={blockRef1} blockRef2={blockRef2} blockRef3={blockRef3} blockRef4={blockRef4}
                blockRef5={blockRef5}
            />
            <BurgerModal opened={opened} setOpened={setOpened}
                         scrollTo={scrollTo}
                         blockRef1={blockRef1} blockRef2={blockRef2} blockRef3={blockRef3} blockRef4={blockRef4}
                         blockRef5={blockRef5}
            />
            <div className={style.children}>
                {children}
                <Footer scrollTo={scrollTo}
                        blockRef1={blockRef1} blockRef2={blockRef2} blockRef3={blockRef3} blockRef4={blockRef4}
                        blockRef5={blockRef5}/>
            </div>
        </>
    );
};

export default Layout;