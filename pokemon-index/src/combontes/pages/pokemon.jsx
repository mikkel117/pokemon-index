import React, { useContext} from 'react';
import {HomeFetch} from '../context/homeFetch'
import {PokemonFetch} from '../context/pokemonFetch';


export default function Pokemon() {
    const {homeData} = useContext(HomeFetch)
    const {pokemonData, setPokemonChoice, callApi} = useContext(PokemonFetch)
    // const {setCallApi} = useContext(PokemonFetch)


    const Test = (results) => {
        console.log(results);
        setPokemonChoice(results.name)
    }

  return (
    <section>
  <div>
      {homeData && homeData.results.map((results) =>{
          return(
              <p key={results.url}>
                  {results.name}
                  <button onClick={() => {
                      Test(results);
                    // setCallApi(true)
                    console.log(callApi);
                  }}>click me</button>
              </p>
          )
      })}
  </div>
  {}
  <div className="pokemon-data-overlaye">

  </div>
    </section>
  );
}
