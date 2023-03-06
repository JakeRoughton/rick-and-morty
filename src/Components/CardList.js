import React from 'react';
import { Card } from './Card';

const CardList = ({characters}) => {
    const cardArray = characters.map((data, i) => {
        return(
            <Card 
            key={i} 
            name={characters[i].name}
            id={characters[i].id}
            gender={characters[i].gender}
            species={characters[i].species}
            status={characters[i].status}
            />
        )
    })
    return(
        <div>
        {cardArray}
        </div>
    )
}





export default CardList;