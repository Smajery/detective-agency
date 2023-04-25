import Link from 'next/link';
import {useRouter} from 'next/router';

import {StyledContacts, StyledHeader, StyledLogo, StyledNavbar} from './StyledHeader';
import {routes} from './utils/nav-routes';

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
                    {routes.map((route) =>
                        <li key={route.id}>
                            <Link
                                href={route.path}
                                className={pathname === route.path ? 'active' : ''}
                            >
                                {route.name}
                            </Link>
                        </li>
                    )}
                </StyledNavbar>
            </div>
        </StyledHeader>
    );
};

export default Header;