//importaçao de terceiros 
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
//importação de componetes
import { Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Container, Form ,Background} from './styles'


export function SignIn(){
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
                />

                <Input 
                 placeholder="Senha"
                 type="password"
                 icon={FiLock}    
                />

                <Button title="Entrar"/>

                <Link to="/register">
                    Criar Conta
                </Link> 
                
            </Form>

            <Background/>

        </Container>
    )
}