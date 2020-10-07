import React, { useContext } from 'react';
import { HomeFetch } from '../context/homeFetch';
import { PokemonFetch } from '../context/pokemonFetch';

export default function Pokemon() {
  const { homeData } = useContext(HomeFetch);
  const { pokemonData, setPokemonData, setPokemonChoice, callApi, setCallApi } = useContext(
    PokemonFetch
  );

  const PokemonAdd = (results) => {
    console.log(results);
    setPokemonChoice(results.name);
    setCallApi(true);
    setPokemonData('');
  };

  return (
    <section>
      <button
        onClick={() => {
          PokemonAdd();
        }}
      >
        click me to text the modal
      </button>
      <div>
        {homeData &&
          homeData.results.map((results) => {
            return (
              <p key={results.url}>
                {results.name}
                <button
                  onClick={() => {
                    PokemonAdd(results);
                  }}
                >
                  se mere
                </button>
                <br />
                <br />
              </p>
            );
          })}
      </div>
      {callApi ? (
        <div className="pokemon-data-overlaye">
          <div className="modal-content">
            <img src={pokemonData && pokemonData.sprites.front_default} alt="" />
            <button onClick={() => {
          setCallApi(false)
      }} className="close">X</button>
      <p>som text</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
