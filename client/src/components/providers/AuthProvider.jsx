import {createContext, useEffect, useState} from 'react';
import NotFound from '@/components/screens/404/NotFound';
import {useActions} from '@/hooks/UseActions';

export const AuthContext = createContext({
    user: null,
    setUser: () => {}
})

const AuthProvider = ({children, Component: {isOnlyUser}}) => {
    const [user, setUser] = useState(null)

    if (isOnlyUser && !user) return <NotFound/>

    const {checkAuth} = useActions()

    useEffect(() => {
        if (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')) {
            checkAuth()
        }
    }, [])

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;