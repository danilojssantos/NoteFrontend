import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";


export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/danilojssantos.png" 
                alt="foto do usuario" 
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Danilo Joaquim</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}