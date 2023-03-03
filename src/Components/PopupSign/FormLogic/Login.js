import Button from '~/Components/Button';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Style from './Login.module.scss';
import { CloseEye, OpenEye } from '~/Components/Icons';

function Login() {
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
                <h1 className={cx('Log-title')}>Log in</h1>
                <p className={cx('title')}>Email or username</p>
                <input
                    type={'text'}
                    className={cx('text-input')}
                    value={inputValueLogin}
                    onChange={handleInputChangeLogin}
                    placeholder={'Email or username'}
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
                <p className={cx('error-logic')}>
                    Username or password doesn't match our records. Try again.
                </p>
                <a href="https://www.tiktok.com/login/email/forget-password" className={cx('forgot')}>Forgot password?</a>
                <br></br>
                <Button
                    primary
                    disable={!inputValueLogin || !inputValuePass}
                    className={cx('btn-login')}
                >
                    Login
                </Button>
            </form>
        </>
    );
}

export default Login;
