import {Container} from "./styles"
import { Button } from "../../components/Button"
export  function Details(){
  
  return(
    <Container>
    <h1>Ola mundo</h1>
    <Button title="login" loading />
    <Button title="Cadastrar"/>
    <Button title="Voltar"/>
    
    </Container>
  )

}