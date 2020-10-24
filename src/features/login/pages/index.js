import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Header from '../components/LoginHeader'
import LoginForm from '../components/LoginForm';
import FormSeparator from '../components/FormSeparator';
import LoginBtnCombo from 'components/LoginBtnCombo';

import '../styles/login.scss';

function Login(props) {
    const ref = useRef();
    const { t } = useTranslation();

    return (
        <div id="login" className="login" ref={ref}>
            <Header />
            <div className="main-content">
                <LoginForm />
                <br />
                <FormSeparator content={t('or')} />
                <LoginBtnCombo />
            </div>
        </div>
    );
}

export default Login;