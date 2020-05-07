import React,{createContext, useContext, useState, useEffect} from 'react'

import {AsyncStorage} from 'react-native';

import * as Auth from '../services/auth';

interface User{
    firstName: string;
    lastName: string;
    email: string;
}

interface AuthContextData{
    signed: string | null;
    user : object | null;
    loading: boolean;
    signIn(): void;
    signOut():void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState<string | null>(null);

    useEffect(()=>{
        async function loadStorageData() {
         const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
         const storagedSigned = await AsyncStorage.getItem('@RNAuth:signed');
         if(storagedUser){
            setUser(JSON.parse(storagedUser));
            setSigned(storagedSigned ? 'true': null);
            console.log(storagedSigned, 'provider');
            console.log(storagedUser, 'provider');
            setLoading(false);
            }
         } 
        loadStorageData();
        setLoading(false);
     }, [])

    async function signOut(){
        await AsyncStorage.removeItem('@RNAuth:token');
        await AsyncStorage.removeItem('@RNAuth:signed');
        setSigned(null);
    }
    async function signIn(){
        const response = await Auth.signIn();
        setUser(response.user);
        setSigned('true');
        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
        await AsyncStorage.setItem('@RNAuth:signed', 'true');
    }

    return(
        <AuthContext.Provider value={{loading,signed , user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    ) 
}
export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
export default AuthProvider;