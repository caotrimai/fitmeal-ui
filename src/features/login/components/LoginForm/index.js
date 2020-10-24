import React from 'react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { phoneReg } from 'common/constant/regex';
import { login } from 'app/thunks/userThunk'

import '../styles/LoginForm.scss';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';




function LoginForm(props) {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const isLoggedIn = useSelector(state => state.authen.loggedIn);
    const referrer = useSelector(state => state.location.referrer);
    const loginError = useSelector(state => state.login.loginError);


    const { control, errors, handleSubmit, setValue } = useForm();

    const phoneErrRequired = errors.phone?.type === "required" && t('This is a required field!');
    const phoneErrPattern = errors.phone?.type === "pattern" && t('Please input a valid phone number!');
    const phoneError = [phoneErrRequired, phoneErrPattern];

    const passwordErrRequired = errors.password?.type === "required" && t('This is a required field!');
    const passwordErrMinLength = errors.password?.type === "minLength" && t('Password must be minimum 6 characters.');
    const passwordError = [passwordErrRequired, passwordErrMinLength];


    const onSubmit = data => {
        dispatch(login(data));
    };

    const PhoneInput = (
        <Form.Item>
            <Input
                id="phone"
                type="text"
                placeholder={t('Phone number')}
                onChange={e => setValue('phone', e.target.value, true)}
                onBlur={e => setValue('phone', e.target.value, true)}
            />
        </Form.Item>
    );

    const PasswordInput = (
        <Form.Item>
            <Input.Password
                type="password"
                placeholder={t('Password')}
                onChange={e => setValue('password', e.target.value, true)}
                onBlur={e => setValue('password', e.target.value, true)}
            />
        </Form.Item>
    );


    if (isLoggedIn) {
        return referrer ? <Redirect to={referrer} /> : <Redirect to='/' />
    } else {
        return (
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="login-form"
            >
                <Controller
                    as={PhoneInput}
                    name="phone"
                    control={control}
                    rules={{
                        required: true,
                        pattern: new RegExp(phoneReg),
                    }}
                    validateStatus={phoneError ? 'error' : ''}
                    help={phoneError}
                />
                <Controller
                    as={PasswordInput}
                    name="password"
                    control={control}
                    rules={{
                        required: true,
                        minLength: 6
                    }}
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError}
                />
                {loginError && <span className="error-message">{t(loginError)}</span>}
                <Button block className="next-button" type="primary" htmlType="submit">
                    {t('Login')}
                </Button>
            </form>
        );
    }
}

export default LoginForm;