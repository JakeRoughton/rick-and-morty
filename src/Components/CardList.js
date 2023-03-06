import React from 'react';
import Cards from './Cards';
import "./CardList.css";

const CardList = (props) => {
    const cardArray = props.characters.map((data, i) => {
        console.log(props)
        return(
            <Cards 
            key={i}
            image={data.image}
            name={data.name}
            id={data.id}
            gender={data.gender}
            species={data.species}
            status={data.status}
            />
        )
    })
    console.log(props)
    return(
        <div className="card-deck">
        {cardArray}
        </div>
    )
}

export default CardList;