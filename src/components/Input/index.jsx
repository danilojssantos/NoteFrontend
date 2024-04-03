import { Container } from "./styles"

// icon:Icon, faz uma conversao para pode serguir po padrao dos componentges
export function Input({icon:Icon, ...rest}){
    return(
        <Container>
            {/* verifica se icone existe na input */}
           {Icon && <Icon size={20}/>}
            <input {...rest}/>
        </Container>
    )
}