import {useTranslation} from 'react-i18next';

import {StyledCopyright, StyledFooter} from './StyledFooter';

const Footer = () => {
    const {t} = useTranslation()
    return (
        <StyledFooter>
            <div className='container'>
                <StyledCopyright>
                    {t('footer.copyright')}
                </StyledCopyright>
            </div>
        </StyledFooter>
    );
};

export default Footer;