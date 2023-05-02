import Link from 'next/link';
import {useRouter} from 'next/router';

import {StyledContacts, StyledHeader, StyledLogo, StyledNavbar, StyledSubNavbar} from './StyledHeader';

import {routes} from '@/utils/nav-routes';
import {isEmptyArr} from '@/utils/is-empty-arr';
import ChangeModeBtn from '@/components/ui/buttons/dark-mode/ChangeModeBtn';
import ChangeLngBtn from '@/components/ui/buttons/language/ChangeLngBtn';
import {useTranslation} from 'react-i18next';

const Header = () => {
    const {pathname} = useRouter();
    const {t, i18n} = useTranslation();

    return (
        <StyledHeader>
            <div className="container">
                <StyledLogo>
                    <p>
                        {t('header.logo.title1')}
                        <span>
                            <Link href={'/'}>
                                {t("header.logo.title2")}
                            </Link>
                        </span>
                    </p>
                </StyledLogo>
                <StyledContacts>
                    <Link href={'mailto:dirk.gently@gmail.com'}>dirk.gently@gmail.com</Link>
                    <Link href={'tel:+380(97) 493 69 64'}>+380(97) 493 69 64</Link>
                </StyledContacts>
                <StyledNavbar>
                    {isEmptyArr(routes) && routes.map((route) =>
                        <li className="navbar-item"
                            key={route.id}
                        >
                            <Link
                                href={route.path}
                                className={pathname === route.path ? 'active' : ''}
                            >
                                {t(`header.navbar.${route.title}`)}
                            </Link>
                            {isEmptyArr(route.subcategories) &&
                                <StyledSubNavbar>
                                    {route.subcategories.map((subcategory) => (
                                        <li className="subnavbar__item"
                                            key={subcategory.id}
                                        >
                                            <Link href={`/services/#${subcategory.anchor}`}>
                                                {t(`header.subbar.${route.title}.${subcategory.title}`)}
                                            </Link>
                                        </li>
                                    ))}
                                </StyledSubNavbar>
                            }
                        </li>
                    )}
                    <li className="navbar-item dark-mode">
                        <ChangeModeBtn />
                    </li>
                    <li className="navbar-item signin">
                        <Link href="/signin">
                            {t('header.navbar.Sign in')}
                        </Link>
                    </li>
                    <li className="navbar-item language-box">
                        <ChangeLngBtn lng={'en'}
                                      active={i18n.language === 'en'}
                                      children={'EN'}
                        />
                        <ChangeLngBtn lng={'uk'}
                                      active={i18n.language === 'uk'}
                                      children={'UA'}
                        />
                    </li>
                </StyledNavbar>
            </div>
        </StyledHeader>
    );
};

export default Header;