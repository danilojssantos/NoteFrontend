//importaçao de terceiros 
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
//importação de componetes
import { api } from  '../../services/api.js'
import { Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Container, Form ,Background} from './styles'


export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
       // console.log(name, email, password)

       if (!name || !email || !password) {
        //quando função encontra um return para nao deixa prosseguir
       return alert("Preencha todos os campos")
        
       }

       api.post("/users", {name, email,password})
       .then(()=> {
            alert("Usuario cadastrado com sucesso!")
            navigate("/")
       })
       .catch(error => {
         if (error.response) {
            //busca resposta da api 
            alert(error.response.data.message)
            
         }else{
            alert("não foi possivel cadastrar")
         }
       })

    }
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
                 onChange={e =>setName(e.target.value)}  
                />


                <Input 
                 placeholder="E-mail"
                 type="text"
                 icon={FiMail}  
                 onChange={e =>setEmail(e.target.value)}  
                />

                <Input 
                 placeholder="Senha"
                 type="password"
                 icon={FiLock} 
                 onChange={e =>setPassword(e.target.value)}   
                />

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/">
                    Volta para o Login
                </Link>
            </Form>

          

        </Container>
    )
}