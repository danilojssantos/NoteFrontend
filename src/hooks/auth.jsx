import{createContext, useContext } from 'react';

export const authContext = createContext({});

function AuthProvider({children}){
    return(
        <authContext.Provider value={{name: 'Danilo',email:'danilojssantos02@gmail.com'}}>
            {children}
        </authContext.Provider>
    )
}

function useAuth(){
    const context = useContext(authContext);
    return context;
}

export {AuthProvider , useAuth}