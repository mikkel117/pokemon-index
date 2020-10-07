import React, { useContext} from 'react';
import {HomeFetch} from '../context/homeFetch'
import {PokemonFetch} from '../context/pokemonFetch';


export default function Pokemon() {
    const {homeData} = useContext(HomeFetch)
    const {pokemonData, setPokemonChoice, callApi, setCallApi} = useContext(PokemonFetch)


    const PokemonAdd = (results) => {
        console.log(results);
        setPokemonChoice(results.name)
        setCallApi(true)
    }

  return (
    <section>
        <button onClick={() => {
            setCallApi(true)
        }}>click me</button>
  <div>
      {homeData && homeData.results.map((results) =>{
          return(
              <p key={results.url}>
                  {results.name}
                  <button onClick={() => {
                      PokemonAdd(results);
                  }}>se mere</button>
              </p>
          )
      })}
  </div>
  { callApi ? (
  <div className="pokemon-data-overlaye">
      <h1>hej</h1>
      <button onClick={() => {
          setCallApi(false)
      }}>X</button>
  </div>
  ) : (
      <>

      </>
  ) }

    </section>
  );
}
