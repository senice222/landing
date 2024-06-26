import React from "react";
import style from "./Footer.module.scss";
import tg from "../../assets/telegram-svgrepo-com (1).png";
import inst from "../../assets/instagram-svgrepo-com (1).png";
import viber from "../../assets/viber-svgrepo-com (1).png";
import { useTranslation } from "react-i18next";
import lushi from "../../assets/Group 14312.png";
import map from "../../assets/address-location-map-svgrepo-com 1.png";
import clock from "../../assets/time-svgrepo-com (1) 1.png";
import mail from "../../assets/Vector.png";
import phone from "../../assets/phone-svgrepo-com (1) 1.png";

const Footer = ({ blockRef5, scrollTo, blockRef1, blockRef2, blockRef4 }) => {
  const { t } = useTranslation();

  return (
    <footer className={style.footer} ref={blockRef5}>
      <div className={style.items}>
        <div className={style.topBlocks}>
          <div className={style.wrappBlocks}>
            <div className={style.firstBlock}>
              <img src={lushi} alt="/" />
              <div className={style.info}>
                <p>
                  {t(
                    'Limited Liability Company "Lushi International Trading Company Registration number 193684755"'
                  )}
                </p>
              </div>
            </div>
            <div className={style.secondBlock}>
              <div className={style.contacsBlock}>
                <h1>{t("CONTACTS")}</h1>
                <div className={style.infoItem} style={{ marginTop: "20px" }}>
                  <div className={style.wrapp}>
                    <div className={style.address}>
                      <img src={map} alt="/" />
                      <p>
                        {t(
                          "Moskovsky district, Minsk, st. Zheleznodorozhnaya, 33A, office. 402 (room 2-19)"
                        )}
                      </p>
                    </div>
                    <div className={style.address}>
                      <img src={map} alt="/" />
                      <p style={{ marginTop: "10px" }}>
                        {t(
                          "Block 801, Building 8, Phase I, Jindai Smart Industrial Park, Chengfa, Zhengzhou City"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style.infoItem}>
                  <img src={clock} className={style.clock} alt="/" />
                  <div className={style.addressInfo}>
                    <p className={style.bolderText}>
                      {t("Accepting applications")} 24/7
                    </p>
                  </div>
                </div>
                <div className={style.infoItem}>
                  <div className={style.mailDiv}>
                    <img src={mail} className={style.mail} alt="/" />
                  </div>
                  <div className={style.addressInfo}>
                    <p className={style.mailText}>lushi.minsk@gmail.com</p>
                  </div>
                </div>
                <div className={style.infoItem}>
                  <img src={phone} className={style.phone} alt="/" />
                  <div className={style.addressInfo}>
                    <p className={style.bolderText}>+375(29)-138-45-57</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.bottomSide}>
          <div className={style.links}>
            <a onClick={() => scrollTo(blockRef1.current)}>
              {t("About company")}
            </a>
            <a onClick={() => scrollTo(blockRef2.current)}>{t("Services")}</a>
            <a onClick={() => scrollTo()}>{t("Reviews")}</a>
            <a onClick={() => scrollTo(blockRef4.current)}>F.A.Q</a>
          </div>
          <div className={style.icons}>
            <img src={tg} alt="/" />
            <img src={inst} alt="/" />
            <img src={viber} alt="/" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
