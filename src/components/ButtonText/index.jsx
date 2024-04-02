import { Container } from "./styles"

export function ButtonText({title, ...rest}){
    return(
        <Container
         Type="button"
         {...rest}
        >
            {title}
        </Container>
    );
}