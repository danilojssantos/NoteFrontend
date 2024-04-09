//importaçao de terceiros 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
//importação de componetes
import { useAuth } from '../../hooks/auth';
import { Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Container, Form ,Background} from './styles'


export function SignIn(){

    const {signIn} = useAuth();
  //  console.log("meu contexto =>", data);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  function handleSignIn(){
    signIn({email, password})
  }

   
    return(
        <Container>

            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links uteis</p>
                <h2>Faça seu Login</h2>

                <Input 
                 placeholder="E-mail"
                 type="text"
                 icon={FiMail} 
                 onChange={e => setEmail(e.target.value)}
                    
                />

                <Input 
                 placeholder="Senha"
                 type="password"
                 icon={FiLock}
                 onChange={e => setPassword(e.target.value)}
                   
                />

                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register">
                    Criar Conta
                </Link> 
                
            </Form>

            <Background/>

        </Container>
    )
}