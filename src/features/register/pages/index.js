import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../components/RegisterHeader'
import RegisterForm from '../components/RegisterForm';
import FormSeparator from '../components/FormSeparator';
import LoginBtnCombo from 'components/LoginBtnCombo';

import 'antd/dist/antd.css';
import '../styles/register.scss';

function Register(props) {
    const ref = useRef();

    const { t } = useTranslation();

    return (
        <div id="register" className="register" ref={ref}>
            <Header />
            <div className="main-content">
                <RegisterForm />
                <br />
                <FormSeparator content={t('or')} />
                <LoginBtnCombo />
                <div className="agreement"><label>{t('By signing up, you have agreed with Fit Meal about the')} </label>
                    <label className="red">{t('Terms of Service')} </label>
                    & <label className="red">{t('Privacy Policy')}</label></div>
            </div>
        </div>
    );
}

export default Register;