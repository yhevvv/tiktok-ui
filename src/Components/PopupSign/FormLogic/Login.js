import Button from '~/Components/Button';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Style from './FormLogic.module.scss';

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
                    className={cx('input-form')}
                    value={inputValueLogin}
                    onChange={handleInputChangeLogin}
                    placeholder={'Email or username'}
                ></input>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={cx('input-form')}
                    value={inputValuePass}
                    onChange={handleInputChangePass}
                    placeholder={'Password'}
                ></input>
                <span onClick={handleTogglePassword} className={cx('status-password')}>
                    {showPassword ? 'Hide' : 'Show'}
                </span>
                <p className={cx('error-logic')}>
                    Username or password doesn't match our records. Try again.
                </p>
                <span className={cx('forgot')}>Forgot password?</span>
                <Button primary disable={!inputValueLogin || !inputValuePass} className={cx('btn-login')}>
                    Log in
                </Button>
            </form>
        </>
    );
}

export default Login;
