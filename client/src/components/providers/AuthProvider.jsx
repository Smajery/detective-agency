import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useRouter} from 'next/router';

import NotFound from '@/components/screens/404/NotFound';
import {useActions} from '@/hooks/UseActions';
import {routes} from '@/routes/routes';

const AuthProvider = ({children}) => {
    const {pathname} = useRouter();
    const {checkAuth, setIsAuth} = useActions();

    const [isRoleCorrect, setIsRoleCorrect] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('userRole')) {
            localStorage.setItem('userRole', 'USER');
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')) {
            checkAuth();
        }
    }, []);

    useEffect(() => {
        if (localStorage.getItem('auth') || sessionStorage.getItem('auth')) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, []);

    useEffect(() => {
        const currentPage = routes.find(route => route.path === pathname);
        if(!currentPage) return;
        if (currentPage.isDefault) {
            return setIsRoleCorrect(true)
        }
        const currentUser = localStorage.getItem('userRole') || sessionStorage.getItem('userRole');
        setIsRoleCorrect(currentPage.userRoles.includes(currentUser));
    }, [pathname]);

    if (!isRoleCorrect) return <NotFound />;

    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;