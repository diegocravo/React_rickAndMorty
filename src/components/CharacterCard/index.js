import React from 'react'

export default function CharacterCard(props) {
    return (
        <div>
            
            <h1>{props.chars.name}</h1>
            <img src={props.chars.image} alt={props.chars.name + "image"}/>
            <h2>{props.chars.gender}</h2>
            <h2>{props.chars.status}</h2>
        </div>
    )
}

