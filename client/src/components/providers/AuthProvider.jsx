import {createContext, useState} from 'react';
import NotFound from '@/components/screens/404/NotFound';

export const AuthContext = createContext({
    user: null,
    setUser: () => {}
})

const AuthProvider = ({children, Component: {isOnlyUser}}) => {
    const [user, setUser] = useState(null)

    if (isOnlyUser && !user) return <NotFound/>

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;