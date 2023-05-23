import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyledResetForm} from './StyledResetForm';

const ResetForm = () => {
    const {t} = useTranslation()

    const [emailValue, setEmailValue] = useState('')

    const handleResetPassword = () => {

    }

    return (
        <StyledResetForm>
            <input className='email-input'
                   type='text'
                   value={emailValue}
                   onChange={e => setEmailValue(e.target.value)}
                   placeholder={t('ResetPage.Email')}

            />
            <button className='reset-btn'
                    onClick={handleResetPassword}
            >
                {t('ResetPage.Remind password')}
            </button>
        </StyledResetForm>
    );
};

export default ResetForm;