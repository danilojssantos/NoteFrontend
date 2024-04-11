import {Link} from "react-router-dom"
import { useState } from "react";

import { Container , Form, Avatar} from "./styles";
import{FiArrowLeft,FiUser, FiMail, FiLock, FiCamera}from "react-icons/fi"

import {useAuth} from"../../hooks/auth"
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"



export function Profile(){
    //inicia o hook de autentificação
    const {user} = useAuth();
    //passar o valor 
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();
    
    return(
        <Container>
            <header>
                <Link to="/"> <FiArrowLeft/> </Link>
                
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/danilojssantos.png"
                    alt="foto do usuário" />
                     <label htmlFor="avatar">
                    <FiCamera/>

                    <input 
                        id="avatar"
                        type="file"
                    
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

                <Button title="Salvar"/>
                     

            </Form>
        </Container>
    )
}

