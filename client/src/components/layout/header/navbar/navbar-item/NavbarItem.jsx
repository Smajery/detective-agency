import Link from 'next/link';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/router';

import {isEmptyArr} from '@/utils/is-empty-arr';
import {StyledNavbarItem} from './StyledNavbarItem';
import Subnavbar from './subnavbar/Subnavbar';
import {useSelector} from 'react-redux';


const NavbarItem = ({route}) => {
    const {t} = useTranslation();
    const {pathname} = useRouter();
    const userRole = localStorage.getItem('userRole');

    if (route.isDefault || (route.userRoles && !route.userRoles.includes(userRole))) return;

    return (
        <StyledNavbarItem className={"navbar-item"} $pathname={route.path}>
            <Link
                href={route.path}
                className={pathname === route.path ? 'navbar-a active' : 'navbar-a'}
            >
                {t(`header.navbar.${route.title}`)}
            </Link>
            {isEmptyArr(route.subcategories) && (
                <Subnavbar route={route} />
            )}
        </StyledNavbarItem>
    );
};

export default NavbarItem;