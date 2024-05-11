import axios from 'axios';
import style from './Quiz.module.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProductName } from '../../store/slices/ConsultSlice';
import { useTranslation } from "react-i18next";

const Quiz = ({ step, setStep }) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const handleNextStep = () => {
        if (value !== "") {
            dispatch(setProductName(value))
            setStep((prev) => prev += 1)
        }
        setError(true)
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
                <p>{t("Name of the product to be found ?")}</p>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder={t("Enter the product you need to find")} />
                <div className={style.btns}>
                    {error && <p className={style.error}>{t("Fill in the field at the top.")}</p>}
                    <p></p>
                    {step !== 0 && <button className={style.backBtn}>{t("Back")}</button>}
                    <button className={style.nextBtn} onClick={handleNextStep}>{t("Next")}</button>
                </div>
            </div>
        </div>
    )
}

export default Quiz