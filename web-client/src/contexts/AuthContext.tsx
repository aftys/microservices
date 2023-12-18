import useLocalStorage from '@hooks/useLocalStorage';
import { IAuth } from '@interfaces/IAuth';
import { IAuthContext } from '@interfaces/IAuthContext';
import { createContext, useState, ReactNode, FC } from 'react';

const AuthContext = createContext<IAuthContext>({auth:null, setAuth: ()=>{}});

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const storedAuth=useLocalStorage<IAuth>('auth');
    const [auth, setCurrentAuth] = useState<IAuth | null>(null);

    function setAuth(auth: IAuth | null) {
        auth ? storedAuth.setItem(auth) : storedAuth.removeItem() ;
        setCurrentAuth(auth);
    }

    return (
        <AuthContext.Provider value={{ auth,setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
