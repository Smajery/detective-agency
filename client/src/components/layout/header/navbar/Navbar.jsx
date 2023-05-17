import Link from 'next/link';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/router';

import {StyledNavbar} from './StyledNavbar';
import {isEmptyArr} from '@/utils/is-empty-arr';
import {routes} from '@/routes/routes';
import ChangeModeBtn from '@/components/ui/buttons/dark-mode/ChangeModeBtn';
import ChangeLngBtn from '@/components/ui/buttons/language/ChangeLngBtn';
import {useActions} from '@/hooks/UseActions';
import NavbarItem from './navbar-item/NavbarItem';

const Navbar = () => {
    const {pathname, push} = useRouter();
    const {isAuth} = useSelector(state => state.authReducer);
    const {t, i18n} = useTranslation();
    const {signOut} = useActions();

    const handleSignout = () => {
        try {
            signOut()
            push('/')
                .then(() => {
                    console.log('You have been signed out')
                });
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <StyledNavbar>
            {isEmptyArr(routes) && (
                routes.map((route) => (
                    <NavbarItem route={route}
                                key={route.id}
                    />
                ))
            )}
            {isAuth && (
                <li className="navbar-item signout">
                    <button className="logout-btn"
                            onClick={handleSignout}
                    >
                        {t('header.navbar.Log out')}
                    </button>
                </li>
            )}
            <li className="navbar-item dark-mode">
                <ChangeModeBtn />
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
    );
};

export default Navbar;