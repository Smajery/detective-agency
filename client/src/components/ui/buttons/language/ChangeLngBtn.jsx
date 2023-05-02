import {useTranslation} from 'react-i18next';

import {StyledChangeLngBtn} from './StyledChangeLngBtn';
import {useEffect} from 'react';

const ChangeLngBtn = ({children, lng, active}) => {

    const {t, i18n} = useTranslation();

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language)
            .then(() => {
                console.log('Language changed successfully');
                localStorage.setItem('lng', language)
            })
            .catch((error) => {
                console.error('Failed to initialize localization', error);
                localStorage.removeItem('lng')
            });
    };

    useEffect(() => {
        const currentLng = localStorage.getItem('lng')
        handleChangeLanguage(currentLng)
    }, [])

    return (
        <StyledChangeLngBtn className={active ? 'active' : ''}
                            onClick={() => handleChangeLanguage(lng)}
        >
            {children}
        </StyledChangeLngBtn>
    );
};

export default ChangeLngBtn;