import {useState} from 'react';
import {emailPattern, passwordPattern} from '@/utils/auth-pattern';
import {StyledSigninForm} from '@/components/screens/signin/signin-from/StyledSigninForm';

const SigninForm = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [emailErrorValue, setEmailErrorValue] = useState('');
    const [passwordErrorValue, setPasswordErrorValue] = useState('');

    const [isKeepLoggedIn, setIsKeepLoggedIn] = useState(true);

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
            try {
                console.log('auth success!');
            } catch (error) {
                console.error(error);
            }
        }
    };


    return (
        <StyledSigninForm onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="Nick or email"
                   value={emailValue}
                   onChange={handleEmailChange}
                   className={emailErrorValue !== '' ? 'input-item input-item_error': 'input-item'}
            />
            {emailErrorValue !== '' &&
                <div className='error-text-container'>
                    <p className={'text'}>
                        {emailErrorValue}
                    </p>
                </div>
            }
            <input type="password"
                   placeholder="Password"
                   value={passwordValue}
                   onChange={handlePasswordChange}
                   className={passwordValue !== '' ? 'input-item input-item_error': 'input-item'}
            />
            {passwordErrorValue !== '' &&
                <div className='error-text-container'>
                    <p className={'text'}>
                        {passwordErrorValue}
                    </p>
                </div>
            }
            <button className='signin-btn'>
                Sign in
            </button>
            <div className='signin-options'>
                <label className={isKeepLoggedIn ? 'keep-log-text active' : 'keep-log-text'}>
                    <input type="checkbox"
                           name="keepLoggedIn"
                           value="true"
                           defaultChecked={isKeepLoggedIn}
                           onChange={e => setIsKeepLoggedIn(e.target.checked)}
                    />
                    Keep me logged in
                </label>
                <a href={'/'}
                   className={'forgot-pass-text'}
                >
                    Forgot password?
                </a>
            </div>
        </StyledSigninForm>
    );
};

export default SigninForm;