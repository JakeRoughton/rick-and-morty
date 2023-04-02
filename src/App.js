import './App.css';
import React, { useEffect, useState } from 'react';
import CardList from './Components/CardList';


const DATA_URL = "https://rickandmortyapi.com/api/character/";

function App() {
    //Make hook for characters into state
    const [CharacterData, setCharacterData] = useState([]);
    
    //useEffect hook to fetch characters from API

    useEffect(() => {

    const functionFetch = async () => {
      const response = await fetch(DATA_URL);
      const data = await response.json();
      setCharacterData(data.results);
    }
    functionFetch();

    //Passing "[]" to useEffect will run only once
    }, []);

return(
  <div className='header'>
    <h3>Rick & Morty Characters</h3>
    {CharacterData.length > 0 && <CardList characters={CharacterData}/>}
  </div>
  )
    
}

export default App;
