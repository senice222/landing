import axios from 'axios';
import style from './FouthItem.module.scss'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { notification } from 'antd';

const FouthItem = ({ setStep }) => {
    const [value, setValue] = useState('')
    // const [isEmail, setIsEmail] = useState('')
    const [error, setError] = useState(false)
    const { t } = useTranslation()
    const data = useSelector(state => state.consult)
    
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleNextStep = async () => {
        if (value === "") {
            setError(true);
        } else if (!validateEmail(value)) {
            setError(true);
            notification.error({
                duration: 4,
                message: t("Error."),
                description: t("Please enter a valid email address."),
            });
        } else {
            setError(false);
            try {
                const updatedData = {
                    ...data,
                    email: value
                }
                await axios.post(`${window.location.href}api/quiz-leave-contacts`, updatedData);
                notification.success({
                    duration: 4,
                    message: t("Success."),
                    description: t("The application has been successfully sent."),
                });
                setStep(0);
            } catch (e) {
                console.log(e);
                setError(true);  
            }
        }
    };

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
                {error && <p className={style.error}>{t("Please enter a valid email address.")}</p>}
                <div className={style.btns}>
                    <button className={style.backBtn} onClick={() => setStep((prev) => prev - 1)}>{t("Back")}</button>
                    <button className={style.nextBtn} onClick={handleNextStep}>{t("Leave a request")}</button>
                </div>
            </div>
        </div>
    )
}

export default FouthItem