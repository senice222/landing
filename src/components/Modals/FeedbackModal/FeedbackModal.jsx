import React, {useState} from 'react'
import style from './FeedbackModal.module.scss'
import {PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import axios from "axios";
import {notification} from "antd";

const FeedbackModal = ({modal, setModal}) => {
    const [phone, setPhone] = useState("")
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const {t} = useTranslation()

    const validatePhoneNumber = (value) => {
        const cleanedValue = value.replace(/[^\d+]/g, '');
        const phoneRegex = /^\+\d{10,15}$/;
        return phoneRegex.test(cleanedValue) || t("Enter your phone");
    };

    const onSubmit = async (data) => {
        try {
            const {email, name, phone} = data 
            const newObj = {
                email,
                name,
                phone
            }
            await axios.post(`${window.location.href}api/leave-contacts-modal`, newObj)
            notification.success({
                duration: 4,
                message: t("Success."),
                description: t("The application has been successfully sent."),
            })
            reset()
            setPhone("")
            setModal(false)
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className={modal ? `${style.modal} ${style.active}` : style.modal}
             onClick={() => setModal(false)}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.titleDiv}>
                    <h3>{t("Leave your contacts")}</h3>
                    <p>{t("We will get back to you within a few hours to answer any questions you may have")}</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.inputs}>
                        <input type="text" placeholder={t("Your email")}
                               {...register("email", {
                                   required: t("Enter your email"),
                                   pattern: {
                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                       message: t("Invalid email address")
                                   }
                               })}
                        />
                        {errors.email && <p className={style.error}>{errors.email.message}</p>}
                        <input type="text" className={style.nameInput} placeholder={t("Enter your name")}
                               {...register("name", {
                                   required: t("Enter your name"),
                                   pattern: {
                                       value: /^\D+$/,
                                       message: t("Name cannot contain numbers")
                                   }
                               })}
                        />
                        {errors.name && <p className={style.error}>{errors.name.message}</p>}
                        <PhoneInput
                            defaultCountry="ru"
                            {...register("phone", {
                                required: t("Enter your phone"),
                                validate: validatePhoneNumber
                            })}
                            className={style.phoneInput}
                            onChange={(phone) => {
                                setPhone(phone)
                            }}
                        />
                        {errors.phone && <p className={style.error}>{errors.phone.message}</p>}
                    </div>
                    <button className={style.sendCallback}>{t("Leave a request")}</button>
                </form>
            </div>
        </div>
    )
}

export default FeedbackModal