import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';

import {StyledSignupForm} from './StyledSignupForm';
import {emailPattern, passwordPattern} from '@/utils/auth/patterns';
import hiddenPasswordImg from '@/static/icons/eye-closed.svg';
import shownPasswordImg from '@/static/icons/eye-open.svg';
import {Auth} from '@/api/auth';
import MessageModal from '@/components/ui/modals/message/MessageModal';
import {checkSubmitAuth, emailValueChange, passwordValueChange} from '@/utils/auth/functions';
import Loader from '@/components/ui/loader/Loader';

const SignupForm = () => {
    const {t} = useTranslation();

    const [isLoading, setIsLoading] = useState(false);

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [emailErrorValue, setEmailErrorValue] = useState('');
    const [passwordErrorValue, setPasswordErrorValue] = useState('');

    const [isHiddenPassword, setIsHiddenPassword] = useState(true);

    const [isAuthModal, setIsAuthModal] = useState(false);
    const [authModalText, setAuthModalText] = useState('');

    const handleCloseAuthModal = () => {
        setIsAuthModal(false);
    };

    const handleEmailChange = (e) => {
        emailValueChange(e, setEmailValue, setEmailErrorValue);
    };

    const handlePasswordChange = (e) => {
        passwordValueChange(e, setPasswordValue, setPasswordErrorValue);
    };

    const handleSubmit = (e) => {
        if (!checkSubmitAuth(e, emailValue, passwordValue, setEmailErrorValue, setPasswordErrorValue)) {
            return;
        }
        setIsLoading(true);
        Auth.registration(emailValue, passwordValue)
            .then(() => {
                setEmailValue('');
                setPasswordValue('');
                setAuthModalText('Registration success');
                setIsAuthModal(true);
            })
            .catch(e => {
                setAuthModalText(e.response.data.message);
                setIsAuthModal(true);
            })
            .finally(() => {
                setIsLoading(false);
            });

    };

    return (
        <StyledSignupForm onSubmit={handleSubmit}>
            <input className={emailErrorValue !== '' ? 'input-item input-item_error' : 'input-item'}
                   type="text"
                   placeholder={t('SignupPage.Email')}
                   disabled={isLoading}
                   value={emailValue}
                   onChange={handleEmailChange}
            />
            {emailErrorValue !== '' &&
                <div className="error-text-container">
                    <p className={'text'}>
                        {t(`SigninPage.${emailErrorValue}`)}
                    </p>
                </div>
            }
            <div className="input-password-box">
                <input className={passwordErrorValue !== '' ? 'input-item input-item_error' : 'input-item'}
                       type={isHiddenPassword ? 'password' : 'text'}
                       placeholder={t('SignupPage.Password')}
                       disabled={isLoading}
                       value={passwordValue}
                       onChange={handlePasswordChange}
                />
                <button className="password-security-btn"
                        disabled={isLoading}
                        type="button"
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
            <button className="signup-btn"
                    disabled={isLoading}
                    type="submit"
            >
                {isLoading ? (
                    <Loader type="auth" />
                ) : (
                    t('SignupPage.Sign up')
                )}
            </button>
            <div className={'ask-signin-container'}>
                <p className={'text'}>
                    {t('SignupPage.Do you have an account')}
                    <span><Link href={'/signin'}>{t('SignupPage.Sign in')}</Link></span>
                </p>
            </div>
            <MessageModal child={authModalText}
                          isActive={isAuthModal}
                          handleClose={handleCloseAuthModal}
            />
        </StyledSignupForm>
    );
};

export default SignupForm;