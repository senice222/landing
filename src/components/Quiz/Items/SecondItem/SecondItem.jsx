import React from 'react'
import style from './SecondItem.module.scss'
import { useDispatch } from 'react-redux'
import { setHowFast } from '../../../../store/slices/ConsultSlice'
import { useTranslation } from "react-i18next";

const SecondItem = ({ setStep }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const handleChange = (e) => {
        dispatch(setHowFast(e.target.value))
    }

    const handleNext = () => {
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
                <p className={style.title}>{t("HOW QUICKLY DO YOU NEED TO FIND THE GOODS ?")}</p>
                <div className={style.labelDiv}>
                    <label className={style.radio}>
                        <input name="radio" type="radio" value={"Срочно"} onChange={(e) => handleChange(e)} defaultChecked />
                        <span>{t("Urgent")}</span>
                    </label>
                    <label className={style.radio}>
                        <input name="radio" value={"Не срочно"} onChange={(e) => handleChange(e)} type="radio" />
                        <span>{t("Not urgent")}</span>
                    </label>
                    <label className={style.radio}>
                        <input name="radio" value={"Просто хотел узнать цены"} onChange={(e) => handleChange(e)} type="radio" />
                        <span style={{ fontSize: "19px", width: "350px" }}>{t("Just wanted to know the prices ?")}</span>
                    </label>
                </div>
                <div className={style.btns}>
                    <button className={style.backBtn} onClick={() => setStep(prev => prev -= 1)}>{t("Back")}</button>
                    <button className={style.nextBtn} onClick={handleNext}>{t("Next")}</button>
                </div>
            </div>
            <div />
        </div>
    )
}

export default SecondItem