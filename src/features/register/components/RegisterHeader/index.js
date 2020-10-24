import React from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/RegisterHeader.scss';


function RegisterHeader(props) {
    const { t } = useTranslation();

    return (
        <div className="register-header">
            <div className="left">{t('Register')}</div>
            <div className="right">{t('Have an account?')} <label className="login">{t('Login')}</label></div>
        </div>
    );
}

export default RegisterHeader;