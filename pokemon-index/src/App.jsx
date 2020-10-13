import React from 'react';
import './App.scss';
import Nav from './combontes/nav-header/nav'
import HomeFetchProvider from './combontes/context/homeFetch';
import PokemonFetchProvider from './combontes/context/pokemonFetch'
import VareArrayProvider from './combontes/context/vare'


function App() {
  return (
    <>
      <HomeFetchProvider>
        <PokemonFetchProvider>
        <VareArrayProvider>
        <Nav />
        </VareArrayProvider>
        </PokemonFetchProvider>
      </HomeFetchProvider>
    </>
  );
}

export default App;
