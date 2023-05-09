import {useState} from 'react';
import Image from 'next/image';
import {useTranslation} from 'react-i18next';

import {emailPattern, passwordPattern} from '@/utils/auth-pattern';
import {StyledSigninForm} from '@/components/screens/signin/signin-from/StyledSigninForm';
import shownPasswordImg from '@/static/icons/eye-open.svg';
import hiddenPasswordImg from '@/static/icons/eye-closed.svg';
import {UserService} from '@/api/user.service';

const SigninForm = () => {
    const {t} = useTranslation();

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [emailErrorValue, setEmailErrorValue] = useState('');
    const [passwordErrorValue, setPasswordErrorValue] = useState('');

    const [isKeepLoggedIn, setIsKeepLoggedIn] = useState(true);
    const [isHiddenPassword, setIsHiddenPassword] = useState(true)

    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        let emailError = '';
        if (emailInput === '') {
            emailError = 'Email is empty';
        } else if (!emailPattern.test(emailInput)) {
            emailError = 'Incorrect email';
        }

        setEmailValue(emailInput);
        setTimeout(() => {
            setEmailErrorValue(emailError);
        }, 1000);
    };

    const handlePasswordChange = (e) => {
        const passwordInput = e.target.value;
        let passwordError = '';
        if (passwordInput === '') {
            passwordError = 'Password is empty';
        } else if (!passwordPattern.test(passwordInput)) {
            passwordError = 'Incorrect password';
        }

        setPasswordValue(passwordInput);
        setTimeout(() => {
            setPasswordErrorValue(passwordError);
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let emailError = '';
        let passwordError = '';
        if (emailValue === '') {
            emailError = 'Email is empty';
        } else if (!emailPattern.test(emailValue)) {
            emailError = 'Incorrect email';
        }
        if (passwordValue === '') {
            passwordError = 'Password is empty';
        } else if (!passwordPattern.test(passwordValue)) {
            passwordError = 'Incorrect password';
        }

        setEmailErrorValue(emailError);
        setPasswordErrorValue(passwordError);

        if (emailError === '' && passwordError === '') {
            UserService.login(emailValue, passwordValue)
                .then(
                    () => {
                        console.log('Login completed successfully!')
                        setEmailValue('')
                        setPasswordValue('')
                    }
                )
                .catch(
                    e => console.error(e.response.data.message)
                )
        }
    };


    return (
        <StyledSigninForm onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="E-mail"
                   value={emailValue}
                   onChange={handleEmailChange}
                   className={emailErrorValue !== '' ? 'input-item input-item_error' : 'input-item'}
            />
            {emailErrorValue !== '' &&
                <div className="error-text-container">
                    <p className={'text'}>
                        {t(`SigninPage.${emailErrorValue}`)}
                    </p>
                </div>
            }
            <div className='input-password-box'>
                <input type={isHiddenPassword ? 'password' : 'text'}
                       placeholder={t('SigninPage.Password')}
                       value={passwordValue}
                       onChange={handlePasswordChange}
                       className={passwordErrorValue !== '' ? 'input-item input-item_error' : 'input-item'}
                />
                <button className="password-security-btn"
                        onClick={() => setIsHiddenPassword(!isHiddenPassword)}
                >
                    <Image src={isHiddenPassword ? hiddenPasswordImg : shownPasswordImg}
                           alt={'Shown password'}
                           height={23}
                           width={23}
                    />
                </button>
            </div>
            {passwordErrorValue !== '' &&
                <div className="error-text-container">
                    <p className={'text'}>
                        {t(`SigninPage.${passwordErrorValue}`)}
                    </p>
                </div>
            }
            <button className="signin-btn">
                {t('SigninPage.Sign in')}
            </button>
            <div className="signin-options">
                <label className={isKeepLoggedIn ? 'keep-log-text active' : 'keep-log-text'}>
                    <input type="checkbox"
                           name="keepLoggedIn"
                           value="true"
                           defaultChecked={isKeepLoggedIn}
                           onChange={e => setIsKeepLoggedIn(e.target.checked)}
                    />
                    {t('SigninPage.Keep me logged in')}
                </label>
                <a href={'/'}
                   className={'forgot-pass-text'}
                >
                    {t('SigninPage.Forgot password')}
                </a>
            </div>
        </StyledSigninForm>
    );
};

export default SigninForm;