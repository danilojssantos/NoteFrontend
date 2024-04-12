import {Link} from "react-router-dom"
import { useState } from "react";

import { Container , Form, Avatar} from "./styles";
import{FiArrowLeft,FiUser, FiMail, FiLock, FiCamera}from "react-icons/fi"

import {useAuth} from"../../hooks/auth"
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"



export function Profile(){
    //inicia o hook de autentificação
    const {user,updateProfile} = useAuth();
    //passar o valor 
    
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();
    const [avatar, setAvatar] = useState(user.avatar);
    const [avatarFile, setAvatarFile] = useState(null);

    function handleChangeAvatar(event){
        //extrai o arquivo
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)


    }
    
    async function handleUpdate(){
        //passa tudo para um objeto 
        const user ={
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,

        }
        
        //passa para função o objeto 
        await updateProfile({ user , avatarFile});
    }
    return(
        <Container>
            <header>
                <Link to="/"> <FiArrowLeft/> </Link>
                
            </header>

            <Form>
                <Avatar>
                    <img 
                    src={avatar}
                    alt="foto do usuário" />
                     <label htmlFor="avatar">
                    <FiCamera/>

                    <input 
                        id="avatar"
                        type="file"
                        onChange={handleChangeAvatar}
                    
                    />

                </label>

                </Avatar>
               
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}  
                    value={name} //valor que vem da api
                    onChange={e=> setName(e.target.value)}//evento para passar o valor
                />
                

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}  
                    value={email}//valor que vem da api
                    onChange={e=> setEmail(e.target.value)}
                /> 

                 <Input 
                    placeholder="senha atual"
                    type="password"
                    icon={FiLock} 
                    onChange={e=> setPasswordOld(e.target.value)} 
                />   

                 <Input 
                    placeholder="nova senha"
                    type="password"
                    icon={FiLock}  
                    onChange={e=> setPasswordNew(e.target.value)}
                />    
                                       
                <Button title="Salvar" onClick={handleUpdate}/>
                     

            </Form>
        </Container>
    )
}

