import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';
import { Container, Profile, Logout } from "./styles";


export function Header(){
    //inicia usAuth
            
    const {signOut} = useAuth();
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/danilojssantos.png" 
                alt="foto do usuario" 
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Danilo Joaquim</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                {/* icone */}
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}