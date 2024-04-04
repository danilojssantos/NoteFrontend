//importaçao de terceiros 
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
//importação de componetes
import { Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Container, Form ,Background} from './styles'


export function SignUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links uteis</p>
                <h2>Crie sua conta</h2>
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
                 placeholder="Senha"
                 type="password"
                 icon={FiLock}    
                />

                <Button title="Cadastrar"/>

                <Link to="/">
                    Volta para o Login
                </Link>
            </Form>

          

        </Container>
    )
}