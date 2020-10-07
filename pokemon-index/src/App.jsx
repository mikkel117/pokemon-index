import React from 'react';
import './App.scss';
import HomeFetchProvider from './combontes/context/homeFetch';
import PokemonFetchProvider from './combontes/context/pokemonFetch'
import Nav from './combontes/nav-header/nav'

function App() {
  return (
    <section className="App">
      <HomeFetchProvider>
        <PokemonFetchProvider>
        <Nav />
        </PokemonFetchProvider>
      </HomeFetchProvider>
    </section>
  );
}

export default App;
