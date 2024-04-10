import{createContext, useContext, useState } from 'react';
import {api} from '../serviçes/api'
export const authContext = createContext({});

function AuthProvider({children}){
    const [data, setData] = useState({});
    //função de autendificação 

    async function signIn({email,password}){

        //pega resposta da api
        try{
            const response = await api.post("/sessions", {email, password});
            const {user, token} = response.data;

            api.defaults.headers.authorization.data =`Barer ${token}`;
            setData({user, token})
            // console.log(response)
        }catch(error){
            if (error.response) {
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel acessar")
            }
        }
        


    }
    return(
        <authContext.Provider value={{signIn, user: data.user}}>
            {children}
        </authContext.Provider>
    )
}

function useAuth(){
    const context = useContext(authContext);
    return context;
}

export {AuthProvider , useAuth}