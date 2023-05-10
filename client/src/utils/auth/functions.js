import {emailPattern, passwordPattern} from '@/utils/auth/patterns';
import {Auth} from '@/api/auth';

export const emailValueChange = (e, setEmailValue, setEmailErrorValue) => {
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

export const passwordValueChange = (e, setPasswordValue, setPasswordErrorValue) => {
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

export const checkSubmitAuth = (e, emailValue, passwordValue, setEmailErrorValue, setPasswordErrorValue) => {
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
        return true;
    }
};