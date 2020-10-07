import React, {createContext, useEffect, useState} from 'react'

export const PokemonFetch = createContext();

const PokemonFetchProvider = (props) => {
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonChoice, setPokemonChoice] = useState('');
    const [callApi, setCallApi] = useState(false);

    useEffect(() => {
        if (callApi === true){
        if (!pokemonData) {
          const fetchHeaders = new Headers();
          fetchHeaders.append('Accept', 'application/json');
    
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonChoice}`, {
            method: 'GET',
            headers: fetchHeaders,
            redirect: 'follow',
          })
            .then((res) => res.json())
            .then((data) => {
                setPokemonData(data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        console.log('pokemon data', pokemonData && pokemonData.sprites.front_default);
    }
      });



    return(
        <PokemonFetch.Provider value={{ pokemonData, setPokemonData, setCallApi, callApi, setPokemonChoice }}>
            {props.children}
        </PokemonFetch.Provider>
    )
}

export default PokemonFetchProvider;