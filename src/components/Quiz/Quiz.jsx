import axios from 'axios';
import style from './Quiz.module.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProductName } from '../../store/slices/ConsultSlice';
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion'

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
                <div className={style.wrappLine}>
                    <div className={style.line} />
                </div>
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                >
                    {t("ANSWER A FEW QUESTIONS SO THAT'SO")}
                    <span><br />{t(" WE CAN SEE HOW WE CAN HELP YOU.")}</span>
                </motion.p>
            </div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                className={style.answerFewQuestions}>
                <div>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                    >{t("Name of the product to be found ?")}
                    </motion.p>
                    <motion.input
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                        value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder={t("Enter the product you need to find")} />
                </div>
                <div className={style.btns}>
                    {error && <p className={style.error}>{t("Fill in the field at the top.")}</p>}
                    <p></p>
                    {step !== 0 && <button className={style.backBtn}>{t("Back")}</button>}
                    <motion.button
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                        className={style.nextBtn} onClick={handleNextStep}>{t("Next")}</motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default Quiz