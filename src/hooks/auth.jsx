import{createContext, useContext, useState, useEffect } from 'react';
import {api} from '../services/api'
export const authContext = createContext({});

function AuthProvider({children}){
    const [data, setData] = useState({});
    
    //função de autendificação do login

    async function signIn({email,password}){

        //pega resposta da api
        try{
            
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
            //local  storage para manter uma sessao
            //pega o usario e que vem objeto e converte para json
            localStorage.setItem("@notes:user", JSON.stringify(user));
           //salva token no localStorage
            localStorage.setItem("@notes:token", token);

            //api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            api.defaults.headers.common['Authorization'] = `Barer ${token}`;
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
    //função responsavel pelo logout
    function signOut(){
        //remove os dados do lacalStorage
        localStorage.removeItem("@notes:token")
        localStorage.removeItem("@notes:user")

        setData({})

    }

    //funçao para autlizar o profile
    //recebe os dados do usario 
    
    async function updateProfile({ user, avatarFile }){
        try {

            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
                //console.log(user.avatar)

            }
            await api.put("/users", user);
            
            //atuliza o localStorage
            localStorage.setItem("@notes:user", JSON.stringify(user));
            
            setData({ user, token: data.token });
            alert("Perfil atualizado com sucesso!!!")
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel atualizar esse Perfil")
            }
        }

    }

    useEffect(()=>{
        const token  = localStorage.getItem("@notes:token");
        const user  = localStorage.getItem("@notes:user");

        if (token && user) {

            api.defaults.headers.common['Authorization'] = `Barer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            })


        }

    },[]);
    return(
        <authContext.Provider value={{
            //contexto rece as funcoes 
            signIn, 
            user: data.user,
            updateProfile,
            signOut
            }}>
            {children}
        </authContext.Provider>
    )
}

function useAuth(){
    const context = useContext(authContext);
    return context;
}

export {AuthProvider , useAuth} 