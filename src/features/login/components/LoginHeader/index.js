import React from 'react';
import { useTranslation } from 'react-i18next';

import '../styles/LoginHeader.scss';


function LoginHeader(props) {
    const { t } = useTranslation();

    return (
        <div className="login-header">
            <div className="left">{t('Login')}</div>
            <div className="right">{t('Do not have an account?')} <label className="login">{t('Register')}</label></div>
        </div>
    );
}

export default LoginHeader;