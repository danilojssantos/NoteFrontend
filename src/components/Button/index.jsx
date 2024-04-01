import { Container } from "./styles";
//rest passa todas proprieadade do botao que nao foram declarada
//loding false caso nao passa para nenhum outro botao essa propridade ele deixa por padreao false
export function Button({title, loading = false, ...rest}){
    return(
    <Container 
    type="button"
    disabled={loading}
    {...rest}
    >
        {loading ? 'Carregando...' : title}
    </Container>   
    ) 
}