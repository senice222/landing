import React from 'react'
import style from '.././SecondItem/SecondItem.module.scss'
import { useDispatch } from 'react-redux'
import { setArranges } from '../../../../store/slices/ConsultSlice'
import { useTranslation } from "react-i18next";


const ThirdItem = ({ setStep }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const handleChange = (e) => {
        dispatch(setArranges(e.target.value))
    }

    const handleNext = async () => {
        setStep((prev) => prev += 1)
    }

    return (
        <div className={style.quiz}>
            <div className={style.titleHeaderAnswer}>
                <p>
                    {t("ANSWER A FEW QUESTIONS SO THAT'SO")}
                    <span><br />{t(" WE CAN SEE HOW WE CAN HELP YOU.")}</span>
                </p>
            </div>
            <div className={style.answerFewQuestions}>
                <p className={style.specialTitle}>
                    {t("The minimum batch amount for an order is $5000 per item excluding logistics. Are you satisfied with this amount?")}<br /><br />
                    {t("If the purchase price of an item is below the minimum threshold of $5,000, our minimum commission is $600.  Are you satisfied with these conditions?")}
                    </p>
                <div className={style.labelDiv}>
                    <label className={style.radio}>
                        <input name="radio" type="radio" value={"Да, устраивает"} onChange={(e) => handleChange(e)} defaultChecked />
                        <span style={{ fontSize: "18.6px" }}>{t("Yes, I am")}</span>
                    </label>
                    <label className={style.radio}>
                        <input name="radio" value={"Нет, хотел бы осудить варианты"} onChange={(e) => handleChange(e)} type="radio" />
                        <span style={{ fontSize: "18.5px", width: "340px" }}>{t("No, I would like to discuss options")}</span>
                    </label>
                </div>
                <div className={style.btns}>
                    <button className={style.backBtn} onClick={() => setStep(prev => prev -= 1)}>{t("Back")}</button>
                    <button className={style.nextBtn} onClick={handleNext} style={{ fontSize: "15px" }}>{t("Next")}</button>
                </div>
            </div>
        </div>
    )
}

export default ThirdItem