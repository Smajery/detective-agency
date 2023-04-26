import Link from 'next/link';
import {useRouter} from 'next/router';

import {StyledContacts, StyledHeader, StyledLogo, StyledNavbar, StyledSubNavbar} from './StyledHeader';
import {routes} from '@/utils/nav-routes';
import {isEmptyArr} from '@/utils/is-empty-arr';
import DarkModeButton from '@/components/btns/dark-mode/DarkModeButton';

const Header = () => {
    const {pathname} = useRouter();

    return (
        <StyledHeader>
            <div className="container">
                <StyledLogo>
                    <p>
                        Детективне агентство
                        <span>
                            <Link href={'/'}>
                                «Дірка Джентлі»
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
                        <li className='navbar-item'
                            key={route.id}
                        >
                            <Link
                                href={route.path}
                                className={pathname === route.path ? 'active' : ''}
                            >
                                {route.title}
                            </Link>
                            {isEmptyArr(route.subcategories) &&
                                <StyledSubNavbar>
                                    {route.subcategories.map((subcategory) => (
                                        <li className="subnavbar__item"
                                            key={subcategory.id}
                                        >
                                            <Link href={`/services/#${subcategory.anchor}`}>
                                                {subcategory.title}
                                            </Link>
                                        </li>
                                    ))}
                                </StyledSubNavbar>
                            }
                        </li>
                    )}
                    <li className='navbar-item dark-mode'>
                        <DarkModeButton/>
                    </li>
                    <li className='navbar-item signin'>
                        <Link href="/signin">
                            Вхід
                        </Link>
                    </li>
                </StyledNavbar>
            </div>
        </StyledHeader>
    );
};

export default Header;