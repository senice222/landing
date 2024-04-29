import React, { useState } from 'react'
import style from './Feedback.module.scss'
import money from '../../assets/cash-svgrepo-com 1.png'
import Line from '../../components/Line/Line'
import { useForm } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import {useTranslation} from "react-i18next";
import axios from "axios";
import {notification} from "antd";

const Feedback = () => {
    const [phone, setPhone] = useState("")
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {t} = useTranslation()

    const onSubmit = async (data) => {
        try {
            await axios.post("http://localhost:3030/api/feedback-modal", data)
            notification.success({
                duration: 4,
                message: t("Success."),
                description: t("The application has been successfully sent."),
            })
            reset()
            setPhone("")
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className={style.feedBackBlock}>
            <div className={style.wrappedTitle}>
                <p className={style.headerText}><span>{t("WE'LL DO A FREE ESTIMATE ")}</span>{t("THE COST OF PURCHASE AND DELIVERY TO YOUR COUNTRY")}</p>
            </div>
            <div className={style.wrapper}>
                <div className={style.form}>
                    <h3>{t("Leave your contacts")}</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className={style.callback}>{t("We will contact you within ")}<span className={style.coupleOfHourse}>{t("few hours")}</span></p>
                        <input type="text" className={style.nameInput} placeholder={t("Enter your name")}
                               {...register("name", { required: t("Enter your name"), pattern: {
                                       value: /^[^\d]+$/,
                                       message: t("Name cannot contain numbers")
                                   }  })}
                        />
                        {errors.name && <p className={style.error}>{errors.name.message}</p>}
                        <PhoneInput
                            defaultCountry="ru"
                            {...register("phone", { required: t("Enter your phone") })}
                            className={style.phoneInput}
                            onChange={(phone) => {
                                setPhone(phone)
                            }}
                        />
                        {errors.phone && <p className={style.error}>{errors.phone.message}</p>}
                        <input type="text" className={style.name} placeholder={t("Enter your convenient messenger")} {...register("messenger", { required: true })} />
                        {errors.messenger && <p className={style.error}>{t("Enter your convenient messenger")}</p>}
                        <button type="submit" className={style.callbackbtn}>{t("Contact me")}</button>
                    </form>
                </div>
                <div className={style.priceReasonDiv}>
                    <div className={style.content}>
                        <div className={style.reasonHeader}>
                            <h3>{t("WHAT EXACTLY DOES THE PRICE DEPEND ON?")}</h3>
                            <img src={money} alt="/" />
                        </div>
                        <div className={style.someText}>
                            <p>
                                {t("Close relations with manufacturers for many years allows us to receive goods on more favourable terms and direct supply, and having our own transport company means favourable rates. All this provides our competitive advantage.")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Line />
        </div>
    )
}

export default Feedback