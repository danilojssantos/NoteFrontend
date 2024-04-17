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

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddLink(){
        setLinks(prevState =>[...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))

    }

    function handleaddTag(){
        setTags(prevState =>[...prevState, newTag] )
        setNewTag("");
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
                            onClick={() => handleRemoveLink(link)}
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
                        {
                            tags.map((tag,index)=>(
                                <NoteItem 
                                key={String}
                                value={tag}
                                onClick={()=>{}}
                                />
                            ))
                        }
                            <NoteItem isNew 
                            placeholder="Novo Tag"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleaddTag}
                            />
                        </div>
                    </Section>
                    <Button title="Salvar"/>

                </Form>
            </main>
        </Container>
    )
}