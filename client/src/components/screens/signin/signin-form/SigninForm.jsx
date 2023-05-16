import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/router';

import {emailPattern, passwordPattern} from '@/utils/auth/patterns';
import {StyledSigninForm} from '@/components/screens/signin/signin-form/StyledSigninForm';
import shownPasswordImg from '@/static/icons/eye-open.svg';
import hiddenPasswordImg from '@/static/icons/eye-closed.svg';
import {Auth} from '@/api/auth';
import MessageModal from '@/components/ui/modals/message/MessageModal';
import {checkSubmitAuth, emailValueChange, passwordValueChange} from '@/utils/auth/functions';
import Loader from '@/components/ui/loader/Loader';
import {setStorageItem} from '@/utils/storage';
import {useActions} from '@/hooks/UseActions';

const SigninForm = () => {
    const {t} = useTranslation();
    const {push} = useRouter();
    const {setIsAuth} = useActions();

    const [isLoading, setIsLoading] = useState(false);

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [emailErrorValue, setEmailErrorValue] = useState('');
    const [passwordErrorValue, setPasswordErrorValue] = useState('');

    const [isKeepLoggedIn, setIsKeepLoggedIn] = useState(true);
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);

    const [isMessageModal, setIsMessageModal] = useState(false);
    const [messageModalText, setMessageModalText] = useState('');

    const handleCloseMessageModal = () => {
        setIsMessageModal(false);
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
        Auth.login(emailValue, passwordValue)
            .then(data => {
                const storage = isKeepLoggedIn ? localStorage : sessionStorage;
                setStorageItem('accessToken', data.accessToken, storage);
                setStorageItem('auth', 'true', storage);
                setStorageItem('userRole', data.user.role, storage);
                setIsAuth(true);

                setEmailValue('');
                setPasswordValue('');
                setMessageModalText('Login success');
                setIsMessageModal(true);

                push('/')
                    .then(() => {
                        setIsMessageModal(false);
                        setMessageModalText('');
                    });

            })
            .catch(e => {
                setMessageModalText(e.response.data.message);
                setIsMessageModal(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <StyledSigninForm onSubmit={handleSubmit}>
            <input type="text"
                   placeholder={t('SignupPage.Email')}
                   disabled={isLoading}
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
            <div className="input-password-box">
                <input type={isHiddenPassword ? 'password' : 'text'}
                       placeholder={t('SigninPage.Password')}
                       disabled={isLoading}
                       value={passwordValue}
                       onChange={handlePasswordChange}
                       className={passwordErrorValue !== '' ? 'input-item input-item_error' : 'input-item'}
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
            <button className="signin-btn"
                    type="submit"
                    disabled={isLoading}
            >
                {isLoading ? (
                    <Loader type="auth" />
                ) : (
                    t('SigninPage.Sign in')
                )}
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
            <div className={'ask-signup-container'}>
                <p className={'text'}>
                    {t('SigninPage.Don\'t have an account')}
                    <span><Link href={'/signup'}>{t('SigninPage.Sign up')}</Link></span>
                </p>
            </div>
            <MessageModal child={messageModalText}
                          isActive={isMessageModal}
                          handleClose={handleCloseMessageModal}
            />
        </StyledSigninForm>
    );
};

export default SigninForm;