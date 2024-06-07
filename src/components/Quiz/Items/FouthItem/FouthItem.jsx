import axios from 'axios';
import style from './FouthItem.module.scss'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { setMail } from '../../../../store/slices/ConsultSlice';
import { notification } from 'antd';

const FouthItem = ({ setStep }) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(false)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const data = useSelector(state => state.consult)
    
    const handleNextStep = async () => {
        if (value !== "") {
            dispatch(setMail(value))
            try {
                await axios.post(`${window.location.href}/api/quiz-leave-contacts`, data)
                notification.success({
                    duration: 4,
                    message: t("Success."),
                    description: t("The application has been successfully sent."),
                })
                setStep(0)
            } catch (e) {
                console.log(e)
            }
        } else {
            setError(true)
        }
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
                <p>{t("Enter your email")}</p>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder={t("Enter your email")} />
                {error && <p className={style.error}>{t("Fill in the field at the top.")}</p>}
                <div className={style.btns}>
                    <button className={style.backBtn} onClick={() => setStep((prev) => prev - 1)}>{t("Back")}</button>
                    <button className={style.nextBtn} onClick={handleNextStep}>{t("Leave a request")}</button>
                </div>
            </div>
        </div>
    )
}

export default FouthItem