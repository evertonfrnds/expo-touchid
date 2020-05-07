import React,{createContext, useContext, useState, useEffect} from 'react'

import {AsyncStorage} from 'react-native';

import * as Auth from '../services/auth';

interface User{
    firstName: string;
    lastName: string;
    email: string;
}

interface AuthContextData{
    user : User | null;
    token: string | null;
    loading: boolean;
    signIn(): void;
    signOut():void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {

    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadStorageData() {
         const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
         const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
         if(storagedUser){
            setUser(JSON.parse(storagedUser));
            setToken(storagedToken ? storagedToken : null);
            setLoading(false);
         }
        }
        loadStorageData();
        setLoading(false);
     }, [])

    async function signOut(){
        await AsyncStorage.removeItem('@RNAuth:token');
        setToken(null);
    }
    async function signIn(){
        const response = await Auth.signIn();
        setUser(response.user);
        setToken(response.token);
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

    return(
        <AuthContext.Provider value={{loading, token, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    ) 
}
export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
export default AuthProvider;