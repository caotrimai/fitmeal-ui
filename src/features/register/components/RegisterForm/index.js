import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux'

import { register } from 'app/thunks/userThunk'
import { checkPhoneIsExists } from 'common/service/userService'

import useDebounce from 'components/CustomHooks/useDebounce'

import { phoneReg } from 'common/constant/regex';

import '../styles/RegisterForm.scss';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';




function RegisterForm(props) {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const [phoneInputValue, setPhoneInputValue] = useState('');
    const debouncedPhone = useDebounce(phoneInputValue, 2000);
    const [phoneErrExists, setPhoneErrExists] = useState(false);

    const { control, errors, handleSubmit, setValue, watch } = useForm();

    const phoneErrRequired = errors.phone?.type === "required" && t('This is a required field!');
    const phoneErrPattern = errors.phone?.type === "pattern" && t('Please input a valid phone number!');
    const phoneError = [phoneErrRequired, phoneErrPattern, phoneErrExists];

    const passwordErrRequired = errors.password?.type === "required" && t('This is a required field!');
    const passwordErrMinLength = errors.password?.type === "minLength" && t('Password must be minimum 6 characters.');
    const passwordError = [passwordErrRequired, passwordErrMinLength];

    const confirmPasswordErrRequired = errors.confirmPassword?.type === "required" && t('This is a required field!');
    const confirmPasswordErrValidate = errors.confirmPassword?.type === "validate" && t('Confirm passwords do not match!');
    const confirmPasswordError = [confirmPasswordErrRequired, confirmPasswordErrValidate];




    async function isPhoneExists(phone) {
        return checkPhoneIsExists(phone);
    }

    useEffect(
        () => {
            if (debouncedPhone) {
                isPhoneExists(debouncedPhone).then(results => {
                    const isExists = results.data ? 'SDT này đã tồn tại' : false;
                    setPhoneErrExists(isExists);
                });
            }
        },
        [debouncedPhone] // Only call effect if debounced search term changes
    )

    const onSubmit = data => {
        dispatch(register(data));
    };

    const PhoneInput = (
        <Form.Item>
            <Input
                type="text"
                placeholder={t('Phone number')}
                onChange={e => { setValue('phone', e.target.value, true); setPhoneInputValue(e.target.value) }}
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

    const ConfirmPasswordInput = (
        <Form.Item>
            <Input.Password
                type="password"
                placeholder={t('Confirm password')}
                dependencies={['password']}
                onChange={e => setValue('confirmPassword', e.target.value, true)}
                onBlur={e => setValue('confirmPassword', e.target.value, true)}
            />
        </Form.Item>
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className="register-form"
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
            <Controller
                as={ConfirmPasswordInput}
                name="confirmPassword"
                control={control}
                rules={{
                    required: true,
                    validate: (value) => value === watch('password'),
                }}
                validateStatus={confirmPasswordError ? 'error' : ''}
                help={confirmPasswordError}
            />

            <Button block className="next-button" type="primary" htmlType="submit">
                {t('Continue')}
            </Button>
        </form>
    );
}

export default RegisterForm;