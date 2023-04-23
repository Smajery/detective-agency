import Link from 'next/link';
import {useRouter} from 'next/router';

import {StyledHeader} from './StyledHeader';
import {routes} from './utils/nav-routes';

const Header = () => {
    const {pathname} = useRouter()

    return (
        <StyledHeader>
            {routes.map((route) =>
                <Link
                    href={route.path}
                    className={pathname === route.path ? 'active' : ''}
                    key={route.id}
                >
                    {route.name}
                </Link>
            )}
        </StyledHeader>
    );
};

export default Header;