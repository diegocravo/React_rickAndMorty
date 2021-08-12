import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CharCard from '../CharCard'
import { Container } from '@material-ui/core';

export default function CharacterList() {

    const [characterList, setCharacterList] = useState([])
    const [pagination, setPagination] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
            console.log(response.data.results)
            console.log(response.data.info)
            setCharacterList(response.data.results)
            setPagination(response.data.info)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, [])

    return (
        <Container maxWidth="lg" style={{display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gridGap: "10px"}}>
            {characterList.map((chars, id) => {
                return <CharCard key={id} chars={chars}/>
            })}
        </Container>
    )
}
