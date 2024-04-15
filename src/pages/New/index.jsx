import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Header} from '../../components/Header'
import { Container , Form} from './styles'
import {Input} from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import {NoteItem} from '../../components/Noteitem'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'

export function New(){
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    function handleAddLink(){
        setLinks(prevState =>[...prevState, newLink]);
        setNewLink("");
    }
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota </h1>
                        <Link to="/">Voltar</Link>
                        
                    </header>
                    <Input 
                        placeholder="Titulo"
                    />

                    <Textarea 
                        placeholder="Observações"
                    />
                    <Section title="Links Úteis">
                        {  links.map((link, index)=>(
                            <NoteItem 
                            key={String(index)}
                            value={link}
                            onClick={handleAddLink}
                            />


                        ))
                            
                        }
                        <NoteItem isNew 
                        placeholder="Novo link"
                        value={newLink}
                        onChange={e =>setNewLink(e.target.value)}
                        onClick={handleAddLink}
                        />
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