import { Container , Form, Avatar} from "./styles";
import{FiArrowLeft,FiUser, FiMail, FiLock, FiCamera}from "react-icons/fi"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"



export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>
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
                />
                

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}  
                /> 

                 <Input 
                    placeholder="senha atual"
                    type="password"
                    icon={FiLock}  
                />   

                 <Input 
                    placeholder="nova senha"
                    type="password"
                    icon={FiLock}  
                />    

                <Button title="Salvar"/>
                     

            </Form>
        </Container>
    )
}

