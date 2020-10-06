import React from 'react';
import './App.scss';
import Placeholder from './combontes/pages/pokemon';
import HomeFetchProvider from './combontes/context/homeFetch';
import PokemonFetchProvider from './combontes/context/pokemonFetch'

function App() {
  return (
    <section className="App">
      <HomeFetchProvider>
        <PokemonFetchProvider>
        <Placeholder />
        </PokemonFetchProvider>
      </HomeFetchProvider>
    </section>
  );
}

export default App;
