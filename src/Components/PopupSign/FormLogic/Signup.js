import Button from '~/Components/Button';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Style from './Signup.module.scss';
import SelectBirthday from '../SelectBirthday';
import { CloseEye, OpenEye } from '~/Components/Icons';
import { useDebounce } from '~/hooks';
import * as signUpService from '~/Service/signUpService';

function Signin() {
    const cx = classNames.bind(Style);

    //logic btn log in
    const [inputValueLogin, setInputValueLogin] = useState('');
    const [inputValuePass, setInputValuePass] = useState('');
    const [checkBox, setCheckBox] = useState(false);

    //logic show/hide password
    const [showPassword, setShowPassword] = useState(false);

    const [dataUser, setDataUser] = useState([]);
    const [logicTrue, setlogicTrue] = useState([]);

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
    //logic check box
    function handleCheckBox() {
        setCheckBox(!checkBox);
    }

    const setEmail = inputValueLogin;
    const setPassword = inputValuePass;

    const dataDebounce = useDebounce(setEmail, 200);
    const dataPass = useDebounce(setPassword, 100);

    const HandleSignup = async (event) => {
        event.preventDefault();
        try {
            const data = await signUpService.SignUp({
                type: 'email',
                email: dataDebounce,
                password: dataPass,
            });
            setDataUser(data);
            if (!!data === true) {
                setlogicTrue(false)
                await new Promise((resolve) => setTimeout(resolve, 2500));
                window.location.reload();
            }
            // const response = await axios.post(
            //     'https://tiktok.fullstack.edu.vn/api/auth/register',
            //     data,
            // );
        } catch (error) {
            console.log(error.response.data);
        }
    };

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
                {dataUser ? (
                    <>
                        <span className={cx('logic-true')}></span>
                        {logicTrue ? (
                            <></>
                        ) : (
                            <span className={cx('logic-true')}>
                                You have successfully registered, please login
                            </span>
                        )}
                    </>
                ) : (
                    <p className={cx('logic-error-email')}>
                        The email must be a valid email address.
                    </p>
                )}

                {/* <p className={cx('logic-error-overlap')}>
                    The request could not be completed due to a conflict with
                    the current state of the resource.
                </p> */}
                <br></br>
                <span className={cx('policy')}>
                    <input
                        className={cx('checkbox')}
                        type={'checkbox'}
                        checked={checkBox}
                        onChange={handleCheckBox}
                    ></input>
                    <span className={cx('policy-title')}>
                        Get trending content, newsletters, promotions,
                        recommendations, and account updates sent to your email.
                    </span>
                </span>
                <br></br>
                <Button
                    primary
                    disable={!inputValueLogin || !inputValuePass || !checkBox}
                    className={cx('btn-login')}
                    onClick={HandleSignup}
                >
                    Signup
                </Button>
            </form>
        </>
    );
}

export default Signin;
