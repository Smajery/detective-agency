import Link from 'next/link';
import {useTranslation} from 'react-i18next';

import {StyledContacts, StyledHeader, StyledLogo} from './StyledHeader';
import Navbar from './navbar/Navbar';

const Header = () => {
    const {t} = useTranslation();

    return (
        <StyledHeader>
            <div className="container">
                <StyledLogo>
                    <p>
                        {t('header.logo.title1')}
                        <span>
                            <Link href={'/'}>
                                {t('header.logo.title2')}
                            </Link>
                        </span>
                    </p>
                </StyledLogo>
                <StyledContacts>
                    <Link href={'mailto:dirk.gently@gmail.com'}>dirk.gently@gmail.com</Link>
                    <Link href={'tel:+380(97) 493 69 64'}>+380(97) 493 69 64</Link>
                </StyledContacts>
                <Navbar />
            </div>
        </StyledHeader>
    );
};

export default Header;