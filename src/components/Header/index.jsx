import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth';
import {api} from '../../services/api'
import avatarPlaceholder from '../../assets/perfil.png'
import { Container, Profile, Logout } from "./styles";


export function Header(){
    //inicia usAuth
            
    const {signOut, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl}
                alt={user.name} 
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                {/* icone */}
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}