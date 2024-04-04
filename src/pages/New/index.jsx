import {Header} from '../../components/Header'
import { Container , Form} from './styles'
import {Input} from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import {NoteItem} from '../../components/Noteitem'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'

export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota </h1>
                        <a href='/'>voltar</a>
                    </header>
                    <Input 
                        placeholder="Titulo"
                    />

                    <Textarea 
                        placeholder="Observações"
                    />
                    <Section title="Links Úteis">
                        <NoteItem value="https://danilojoaquim.com.br"/>
                        <NoteItem isNew placeholder="Novo link"/>
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="Novo Tag"/>
                        </div>
                    </Section>
                    <Button title="Salvar"/>

                </Form>
            </main>
        </Container>
    )
}