import './App.css';
import React, { useEffect, useState } from 'react';
import CardList from './Components/CardList';


const DATA_URL = "https://rickandmortyapi.com/api/character/";

function App() {
    //Make hook for characters into state
    const [Characterdata, setCharacterData] = useState();
    
    //useEffect hook to fetch characters from API

    useEffect(() => {
        //Fetch characters from API
    fetch(DATA_URL)
    .then(response => response.json())
    .then(data=> setCharacterData(data))
    //Passing "[]" to useEffect will run only once
    }, []);


    
return(
  <div className='tc'>
    <h3>Rick & Morty Characters</h3>
    <CardList characters={Characterdata}/>
  </div>
  )
    
}






export default App;
