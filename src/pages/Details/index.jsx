import { Container, Links, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
export function Details() {

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
          Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec 
          leo commodo, ut interdum diam laoreet. 
          Sed non consequat odio. Viva Forevis aptent taciti sociosqu ad litora 
          torquent. Pra lá, depois divoltis porris, paradis. Suco de cevadiss, 
          é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Bota 1 
          metro de cachacis aí pra viagem! Aenean aliquam molestie leo, vitae 
          iaculis nisl. Manduma pindureta quium dia nois paga. Posuere libero 
          varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#"> https://www.danilojoaquim.com.br</a>
              </li>
              <li>
                <a href="#"> https://www.danilojoaquim.com.br</a>
              </li>
            </Links>
          </Section>
         <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="NodeJS" />
         </Section>
        <Button title="Voltar" />
        </Content>
      </main>


    </Container>
  )

}