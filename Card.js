import React from 'react';

function Card(props){
    return (
        <div>
        <image src={`https://rickandmortyapi.com/api/character/avatar/${id}`} alt="Rick&Morty =P" width='200px' height='200px'/>
            <div>
        <h3>{props.name}</h3>
        <p>{props.gender}</p>
        <p>{props.species}</p>
        <p>{props.status}</p>
            </div>
        </div>
    )
}

export default Card;