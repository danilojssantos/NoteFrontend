import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {Header} from '../../components/Header'
import { Container , Form} from './styles'
import {Input} from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import {NoteItem} from '../../components/Noteitem'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'
import {api} from '../../services/api'


export function New(){
    const [title, setTitle] =useState("")
           
    const [description, setDescripton] = useState("")
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate()

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

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));

    }

    async function handleNewNote(){
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso!")
        navigate("/")

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
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Textarea 
                        placeholder="Observações"
                        onChange={e => setDescripton(e.target.value)}
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
                                onClick={()=> handleRemoveTag(tag)}
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
                    <Button 
                    title="Salvar"
                    onClick={handleNewNote}
                    />

                </Form>
            </main>
        </Container>
    )
}