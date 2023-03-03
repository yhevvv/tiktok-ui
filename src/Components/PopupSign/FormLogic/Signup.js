import Button from '~/Components/Button';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Style from './Signup.module.scss';
import SelectBirthday from '../SelectBirthday';
import { CloseEye, OpenEye } from '~/Components/Icons';

function Signin() {
    const cx = classNames.bind(Style);

    //logic btn log in
    const [inputValueLogin, setInputValueLogin] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');
    //logic show/hide password
    const [showPassword, setShowPassword] = useState(false);

    //logic btn log in
    function handleInputChangeLogin(event) {
        setInputValueLogin(event.target.value);
    }
    //logic show/hide password
    function handleTogglePassword() {
        setShowPassword(!showPassword);
    }
    function handleInputChangePass(event) {
        setInputValuePass(event.target.value);
    }

    return (
        <>
            <form className={cx('form-wrapper')}>
                <h1 className={cx('Log-title')}>Sign up</h1>
                <p className={cx('birthday-title')}>When’s your birthday?</p>
                <SelectBirthday></SelectBirthday>
                <p className={cx('birthday-warn')}>
                    Your birthday won't be shown publicly.
                </p>

                <p className={cx('title')}>Email</p>
                <input
                    type={'text'}
                    className={cx('text-input')}
                    value={inputValueLogin}
                    onChange={handleInputChangeLogin}
                    placeholder={'Email address'}
                ></input>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={cx('password-input')}
                    value={inputValuePass}
                    onChange={handleInputChangePass}
                    placeholder={'Password'}
                ></input>
                <span
                    onClick={handleTogglePassword}
                    className={cx('status-password')}
                >
                    {showPassword ? <CloseEye></CloseEye> : <OpenEye></OpenEye>}
                </span>
                <p className={cx('condition-wrapper')}>
                    Your password must have:
                </p>
                <p className={cx('condition-1')}>
                    {/* icon */} 8 to 20 characters
                </p>
                <p className={cx('condition-2')}>
                    {/* icon */} Letters, numbers, and special characters
                </p>
                <br></br>
                <span className={cx('policy')}>
                    <input className={cx('checkbox')} type={'checkbox'}></input>
                    <span className={cx('policy-title')}>
                        Get trending content, newsletters, promotions, recommendations, and account updates sent to your email.
                    </span>
                </span>
                <br></br>
                <Button
                    primary
                    disable={!inputValueLogin || !inputValuePass}
                    className={cx('btn-login')}
                >
                    Signup
                </Button>
            </form>
        </>
    );
}

export default Signin;
