import React,{createContext} from 'react'

const AuthContext = createContext({});

const AuthProvider: React.FC = ({children}) => {

    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;